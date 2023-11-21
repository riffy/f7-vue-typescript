<template>
	<f7Page>
		<f7Navbar
			title="Dynamic Route"
			back-link="Back"
		/>
		<f7Block strong>
			<ul>
				<li><b>Url:</b> {{ f7route.url }}</li>
				<li><b>Path:</b> {{ f7route.path }}</li>
				<li><b>Hash:</b> {{ f7route.hash }}</li>
				<li>
					<b>Params:</b>
					<ul>
						<li
							v-for="(value, key) in f7route.params"
							:key="key"
						>
							<b>{{ key }}:</b> {{ value }}
						</li>
					</ul>
				</li>
				<li>
					<b>Query:</b>
					<ul>
						<li
							v-for="(value, key) in f7route.query"
							:key="key"
						>
							<b>{{ key }}:</b> {{ value }}
						</li>
					</ul>
				</li>
				<li><b>Route:</b> {{ f7route.route.path }}</li>
			</ul>
		</f7Block>
		<f7Block strong>
			<f7Link @click="f7router.back()">
				Go back via Router API
			</f7Link>
		</f7Block>
	</f7Page>
</template>
<script lang="ts">
import { RoutedPage } from "@/model/RoutedPage";
import { f7Page, f7Navbar, f7Block, f7Link } from "framework7-vue";
import { Component } from "vue-facing-decorator";

@Component({
	components: {
		f7Page, f7Navbar, f7Block, f7Link
	}
})
export default class DynamicRoutePage extends RoutedPage {}

</script>
