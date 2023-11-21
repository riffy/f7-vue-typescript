<template>
	<f7Page>
		<f7Navbar
			title="Not found"
			back-link="Back"
		/>
		<f7Block strong>
			<p>Sorry</p>
			<p>Requested content not found.</p>
		</f7Block>
	</f7Page>
</template>
<script lang="ts">
import { RoutedPage } from "@/model/RoutedPage";
import { f7Page, f7Navbar, f7Block  } from "framework7-vue";
import { Component } from "vue-facing-decorator";

@Component({
	components: {
		f7Navbar,
		f7Block,
		f7Page
	}
})
export default class NotFoundPage extends RoutedPage {}
</script>