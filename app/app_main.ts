import {bootstrap} from "angular2/platform/browser";  //importing bootstrap function
import {App} from "./app.component";         //importing component function
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(App, [HTTP_PROVIDERS]);