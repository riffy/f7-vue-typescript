<template>
	<f7Page name="settings">
		<f7Navbar title="Settings" />

		<f7BlockTitle>Form Example</f7BlockTitle>
		<f7List no-hairlines-md>
			<f7ListInput
				label="Name"
				type="text"
				placeholder="Your name"
			/>

			<f7ListInput
				label="E-mail"
				type="email"
				placeholder="E-mail"
			/>

			<f7ListInput
				label="URL"
				type="url"
				placeholder="URL"
			/>

			<f7ListInput
				label="Password"
				type="password"
				placeholder="Password"
			/>

			<f7ListInput
				label="Phone"
				type="tel"
				placeholder="Phone"
			/>

			<f7ListInput
				label="Gender"
				type="select"
			>
				<option>Male</option>
				<option>Female</option>
			</f7ListInput>

			<f7ListInput
				label="Birth date"
				type="date"
				placeholder="Birth day"
				default-value="2014-04-30"
			/>

			<f7ListItem
				title="Toggle"
			>
				<template #after>
					<f7-toggle />
				</template>
			</f7ListItem>

			<f7ListInput
				label="Range"
				:input="false"
			>
				<template #input>
					<f7-range
						:value="50"
						:min="0"
						:max="100"
						:step="1"
					/>
				</template>
			</f7ListInput>

			<f7ListInput
				type="textarea"
				label="Textarea"
				placeholder="Bio"
			/>
			<f7ListInput
				type="textarea"
				label="Resizable"
				placeholder="Bio"
				resizable
			/>
		</f7List>

		<f7BlockTitle>Checkbox group</f7BlockTitle>
		<f7List>
			<f7ListItem
				checkbox
				name="my-checkbox"
				value="Books"
				title="Books"
			/>
			<f7ListItem
				checkbox
				name="my-checkbox"
				value="Movies"
				title="Movies"
			/>
			<f7ListItem
				checkbox
				name="my-checkbox"
				value="Food"
				title="Food"
			/>
		</f7List>

		<f7BlockTitle>Radio buttons group</f7BlockTitle>
		<f7List>
			<f7ListItem
				radio
				name="radio"
				value="Books"
				title="Books"
			/>
			<f7ListItem
				radio
				name="radio"
				value="Movies"
				title="Movies"
			/>
			<f7ListItem
				radio
				name="radio"
				value="Food"
				title="Food"
			/>
		</f7List>
	</f7Page>
</template>
<script lang="ts">
import { RoutedPage } from "@/model/RoutedPage";
import { f7Page, f7Navbar, f7List, f7ListItem, f7BlockTitle, f7ListInput, f7Range, f7Toggle  } from "framework7-vue";
import { Component } from "vue-facing-decorator";

@Component({
	components: {
		f7Page, f7Navbar, f7List, f7ListItem, f7BlockTitle, f7ListInput, f7Range, f7Toggle
	}
})
export default class Settings extends RoutedPage {}
</script>
