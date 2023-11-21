<template>
	<f7Page name="home">
		<!-- Top Navbar -->
		<Navbar />

		<!-- Page content-->
		<f7Block
			strong
			class="text-white mt-0 mb-0 bg-color-primary"
		>
			<h2 class="text-xl font-bold mb-3 font-inter">
				UnoCSS Classes & Icons
			</h2>
			<p>
				UnoCSS is the instant atomic CSS engine, that is designed to be flexible
				and extensible. It operates as a utility-based CSS engine, similar to
				popular frameworks like Tailwind CSS and Windi CSS.
			</p>

			<p>
				At its core, UnoCSS remains un-opinionated, while CSS utilities are made
				accessible through presets. This flexibility allows you to tailor your
				CSS to your exact requirements.
				<f7Link
					href="https://unocss.dev/"
					class="text-white underline"
					target="_blank"
					external
				>
					Read more.
				</f7Link>
			</p>

			<div class="flex items-center justify-center space-x-2">
				<div>
					<i class="i-mdi-alarm hover:text-teal-400 w-6 h-6" /> Material Icon
				</div>
				<div>
					<i class="i-tabler-bell hover:text-teal-400 w-6 h-6" /> Tabler Icon
				</div>
				<div>
					<i class="i-carbon:face-wink hover:text-teal-400 w-6 h-6" />
					Carbon Icon
				</div>
			</div>
		</f7Block>

		<f7Block
			strong
			class="mt-[1px] mb-0"
		>
			<h2
				class="text-xl text-color-primary"
				font="bold inter"
			>
				Pinia Example
			</h2>
			<div class="flex items-center justify-center">
				<f7Button
					class="mr-2 w-10"
					fill
					@click="counter.decrement"
				>
					-
				</f7Button>
				<div
					class="px-5 py-1.6 border-rounded-2 flex-1 bg-color-primary"
					font="bold"
					text="white center lg"
				>
					Current Count: {{ counter.count }}
				</div>
				<f7Button
					class="ml-2 w-10"
					fill
					@click="counter.increment"
				>
					+
				</f7Button>
			</div>
		</f7Block>

		<f7Block
			strong
			class="mt-2 py-5"
		>
			<h2
				class="text-xl text-color-primary"
				font="bold inter"
			>
				Vue i18n Translation
			</h2>
			<p text="center lg">
				{{ $t("string") }}
			</p>

			<f7List
				no-hairlines-md
				class="p-0 -mx-4 mt-1 mb-0"
			>
				<f7ListInput
					v-model:value="$i18n.locale"
					label="Switch Language"
					outline
					floating-label
					type="select"
				>
					<option
						v-for="locale in $i18n.availableLocales"
						:key="`locale-${locale}`"
						:value="locale"
					>
						{{ locale }}
					</option>
				</f7ListInput>
			</f7List>
		</f7Block>

		<f7BlockTitle font="xl bold inter">
			Modals
		</f7BlockTitle>
		<f7Block
			strong
			class="mx-3 rounded-xl"
		>
			<div class="grid grid-cols-2 grid-gap">
				<div>
					<f7Button
						fill
						raised
						popup-open="#my-popup"
					>
						Popup Screen
					</f7Button>
				</div>
				<div>
					<f7Button
						fill
						raised
						login-screen-open="#my-login-screen"
					>
						Login Screen
					</f7Button>
				</div>
			</div>
		</f7Block>

		<f7BlockTitle font="xl bold inter">
			Panels
		</f7BlockTitle>
		<f7Block
			strong
			class="mx-3 rounded-xl"
		>
			<div class="grid grid-cols-2 grid-gap">
				<div>
					<f7Button
						fill
						raised
						panel-open="left"
					>
						Left Panel
					</f7Button>
				</div>
				<div>
					<f7Button
						fill
						raised
						panel-open="right"
					>
						Right Panel
					</f7Button>
				</div>
			</div>
		</f7Block>

		<f7List>
			<f7ListItem
				title="Dynamic (Component) Route"
				link="/dynamic-route/blog/45/post/125/?foo=bar#about"
			/>
			<f7ListItem
				title="Default Route (404)"
				link="/load-something-that-doesnt-exist/"
			/>
			<f7ListItem
				title="Request Data & Load"
				link="/request-and-load/user/123456/"
			/>
		</f7List>
	</f7Page>
</template>
<script lang="ts">
import {
	f7Page,
	f7Block,
	f7List,
	f7ListItem,
	f7Link,
	f7Button,
	f7BlockTitle,
	f7ListInput,
} from "framework7-vue";
import Navbar from "@/components/Navbar.vue";
import { useCounterStore } from "../stores/counter";
import { Component, Vue } from "vue-facing-decorator";

@Component({
	components: {
		f7Page,
		f7Block,
		f7List,
		f7ListItem,
		f7Link,
		f7Button,
		f7BlockTitle,
		f7ListInput,
		Navbar
	}
})
export default class About extends Vue {
	counter = useCounterStore();
}
</script>
