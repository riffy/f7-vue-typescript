<template>
	<f7Navbar :sliding="false">
		<f7NavLeft>
			<f7Link panel-open="left">
				<i class="i-mdi-menu w-6 h-6" />
			</f7Link>
		</f7NavLeft>
		<f7NavTitle
			sliding
			class="flex items-center uppercase tracking-wider text-color-primary"
			text="lg"
			font="bold title"
		>
			<i class="i-simple-icons-framework7 w-5 h-5 mr-1" /> F7-Vue
			TypeScript
		</f7NavTitle>
		<f7NavRight>
			<div class="flex items-center">
				<f7Link
					class="min-w-a px-1"
					popover-open=".popover-menu"
				>
					<i
						class="i-mdi-palette-swatch-outline w-5 h-5 text-color-primary"
					/>
				</f7Link>
				<f7Link
					class="min-w-a px-1"
					@click="toggleDarkMode"
				>
					<i
						v-if="isDark"
						class="i-tabler-moon w-5 h-5"
					/>
					<i
						v-else
						class="i-tabler-sun w-5 h-5"
					/>
				</f7Link>
				<div class="flex items-center border-l-3 border-white">
					<f7Link
						href="https://github.com/sajjadalis/f7-vue-typescript"
						target="_blank"
						class="min-w-a px-1"
						external
					>
						<i class="i-carbon-logo-github w-5 h-5" />
					</f7Link>
				</div>
			</div>
		</f7NavRight>
	</f7Navbar>

	<f7Popover class="popover-menu">
		<f7Block>
			<div class="grid grid-cols-6 large-grid-cols-6 grid-gap">
				<div
					v-for="(color, index) in colors"
					:key="index"
				>
					<f7Button
						fill
						round
						small
						class="h-8"
						:color="color"
						@click.prevent="setColorTheme(color)"
					/>
				</div>
			</div>
		</f7Block>
	</f7Popover>
</template>
<script lang="ts">
import {
	f7,
	f7Navbar,
	f7NavRight,
	f7NavLeft,
	f7Link,
	f7NavTitle,
	f7Popover,
	f7Block,
	f7Button,
} from "framework7-vue";
import { Component, Vue } from "vue-facing-decorator";

@Component({
	components: {
		f7Navbar,
		f7NavRight,
		f7NavLeft,
		f7Link,
		f7NavTitle,
		f7Popover,
		f7Block,
		f7Button
	}
})
export default class Navbar extends Vue {
	colors: string[] = Object.keys(f7.colors).filter(
		c => c !== "primary" && c !== "white" && c !== "black"
	);
	isDark: boolean = false;
	hexColor: string | null = null;

	setColorTheme(c: string): void {
		this.hexColor = f7.colors[c];
		if (!this.hexColor) return;
		f7.setColorTheme(this.hexColor);
		localStorage.setItem("themeColor", this.hexColor);
	}

	mounted() {
		// Check for themeColor value inside localStorage
		this.hexColor = localStorage.getItem("themeColor");
		if (this.hexColor) {
			f7.setColorTheme(this.hexColor);
		}

		const darkMode = localStorage.getItem("darkMode") as string | null;
		this.isDark = !!darkMode;
		if (this.isDark) {
			this.$nextTick(() => {
				f7.setDarkMode(this.isDark);
			});
		}

			
	}

	toggleDarkMode() {
		this.isDark = !this.isDark;
		f7.setDarkMode(this.isDark);
		if (this.isDark)
			localStorage.setItem("darkMode", `${this.isDark}`);
		else
			localStorage.removeItem("darkMode");
	}

}
</script>
