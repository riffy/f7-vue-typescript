<template>
	<f7Page>
		<f7Navbar
			:title="`${user.firstName} ${user.lastName}`"
			back-link="Back"
		/>
		<f7Block strong>
			{{ user.about }}
		</f7Block>
		<f7List>
			<f7ListItem
				v-for="(link, index) in user.links"
				:key="index"
				:link="link.url"
				:title="link.title"
				external
				target="_blank"
			/>
		</f7List>
	</f7Page>
</template>
<script lang="ts">
import { f7Page, f7Navbar, f7Block, f7List, f7ListItem } from "framework7-vue";
import { Component, Prop, Vue } from "vue-facing-decorator";

// Define a type for the user object
interface User {
	firstName: string;
	lastName: string;
	about: string;
	links: { url: string; title: string }[];
}

@Component({
	components: {
		f7Page, f7Navbar, f7Block, f7List, f7ListItem
	}
})
export default class RequestAndLoad extends Vue {
	@Prop({required: true}) user!: User;
}
</script>
