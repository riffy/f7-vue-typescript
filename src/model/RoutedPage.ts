import type { Router } from "framework7/types";
import { Prop, Vue, Component } from "vue-facing-decorator";

@Component({})
export abstract class RoutedPage extends Vue {
	@Prop() f7route!: Router.Route;
	@Prop() f7router!: Router.Router;
}