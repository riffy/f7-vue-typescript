<template>
	<f7App v-bind="f7params">
		<!-- Left panel with cover effect-->
		<f7Panel
			left
			cover
			dark
		>
			<f7View>
				<f7Page>
					<f7Navbar title="Left Panel" />
					<f7Block>Left panel content goes here</f7Block>
				</f7Page>
			</f7View>
		</f7Panel>

		<!-- Right panel with reveal effect-->
		<f7Panel
			right
			reveal
			dark
		>
			<f7View>
				<f7Page>
					<f7Navbar title="Right Panel" />
					<f7Block>Right panel content goes here</f7Block>
				</f7Page>
			</f7View>
		</f7Panel>

		<!-- Views/Tabs container -->
		<f7Views
			tabs
			class="safe-areas"
		>
			<!-- Tabbar for switching views-tabs -->
			<f7Toolbar
				tabbar
				labels
				bottom
			>
				<f7Link
					tab-link="#view-home"
					tab-link-active
				>
					<i class="i-tabler-home w-6 h-6" />
					<span class="normal-case text-sm">Home</span>
				</f7Link>
				<f7Link tab-link="#view-about">
					<i class="i-tabler-user w-6 h-6" />
					<span class="normal-case text-sm">About</span>
				</f7Link>
				<f7Link tab-link="#view-settings">
					<i class="i-tabler-settings w-6 h-6" />
					<span class="normal-case text-sm">Settings</span>
				</f7Link>
			</f7Toolbar>

			<!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
			<f7View
				id="view-home"
				main
				tab
				tab-active
				url="/"
			/>

			<!-- About View -->
			<f7View
				id="view-about"
				name="about"
				tab
				url="/about/"
			/>

			<!-- Settings View -->
			<f7View
				id="view-settings"
				name="settings"
				tab
				url="/settings/"
			/>
		</f7Views>

		<!-- Popup -->
		<f7Popup id="my-popup">
			<f7View>
				<f7Page>
					<f7Navbar title="Popup">
						<f7NavRight>
							<f7Link popup-close>
								Close
							</f7Link>
						</f7NavRight>
					</f7Navbar>
					<f7Block>
						<p>Popup content goes here.</p>
					</f7Block>
				</f7Page>
			</f7View>
		</f7Popup>

		<f7LoginScreen id="my-login-screen">
			<f7View>
				<f7Page login-screen>
					<f7LoginScreenTitle>Login</f7LoginScreenTitle>
					<f7List form>
						<f7ListInput
							v-model:value="username"
							type="text"
							name="username"
							placeholder="Your username"
						/>
						<f7ListInput
							v-model:value="password"
							type="password"
							name="password"
							placeholder="Your password"
						/>
					</f7List>
					<f7List>
						<f7ListButton
							title="Sign In"
							@click="alertLoginData"
						/>
						<f7BlockFooter>
							Some text about login information.<br>Click "Sign In" to close
							Login Screen
						</f7BlockFooter>
					</f7List>
				</f7Page>
			</f7View>
		</f7LoginScreen>
	</f7App>
</template>
<script lang="ts">
import {
	f7,
	f7ready,
	f7App,
	f7Page,
	f7View,
	f7Panel,
	f7Block,
	f7BlockFooter,
	f7List,
	f7LoginScreen,
	f7LoginScreenTitle,
	f7Link,
	f7Navbar,
	f7NavRight,
	f7Toolbar,
	f7Views,
	f7Popup,
	f7ListInput,
	f7ListButton,
} from "framework7-vue";
import { getDevice } from "framework7/lite-bundle";
import capacitorApp from "./capacitor-app";
import routes from "./routes/router";
import { Vue, Component } from "vue-facing-decorator";

@Component({
	components: {
		f7App,
		f7Navbar,
		f7Page,
		f7Panel,
		f7Views,
		f7View,
		f7Block,
		f7BlockFooter,
		f7List,
		f7ListInput,
		f7ListButton,
		f7Popup,
		f7LoginScreen,
		f7LoginScreenTitle,
		f7Toolbar,
		f7Link,
		f7NavRight
	}
})
export default class App extends Vue {
	device = getDevice();
	f7params = {
		name: "F7-Vue Typescript", // App name
		theme: "auto", // Automatic theme detection
		id: "com.example.app", // App bundle ID
		// App routes
		routes: routes,

		// Input settings
		input: {
			scrollIntoViewOnFocus: this.device.capacitor,
			scrollIntoViewCentered: this.device.capacitor,
		},
		// Capacitor Statusbar settings
		statusbar: {
			iosOverlaysWebView: true,
			androidOverlaysWebView: false,
		},
	};
	username = "";
	password = "";

	alertLoginData() {
		f7.dialog.alert(
			"Username: " + this.username + "<br>Password: " + this.password,
			() => {
				f7.loginScreen.close();
			}
		);
	}

	mounted() {
		f7ready(() => {
			// Init capacitor APIs (see capacitor-app.js)
			if (this.device.capacitor) {
				capacitorApp.init(f7);
			}
			// Call F7 APIs here
		});
	}
}
</script>
