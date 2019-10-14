import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TabsComponent } from "./tabs/tabs.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "tabs", component: TabsComponent },
    { path: "auth", component: AuthComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
