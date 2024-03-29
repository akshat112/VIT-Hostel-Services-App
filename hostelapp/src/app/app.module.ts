import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TabsComponent } from './tabs/tabs.component';
import { AuthComponent } from './auth/auth.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { NativeScriptPickerModule } from "nativescript-picker/angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptPickerModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        AuthComponent,
        FloatLabelComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
