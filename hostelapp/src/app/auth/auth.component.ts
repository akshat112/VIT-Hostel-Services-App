import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { prompt, inputType, action, alert } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { isAndroid, device } from "tns-core-modules/platform";
import * as app from "tns-core-modules/application";

declare var android: any;
@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  moduleId: module.id,
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    @ViewChild('password', {static: false}) passwordField: ElementRef;
    @ViewChild('email', {static: false}) emailField: ElementRef;

    public user = {
        email: "",
        password: ""
    }
    showBlockPicker = false;
    isAuthenticating = false;

    public hideIcon = String.fromCharCode(0xf070);
    public showIcon = String.fromCharCode(0xf06e);
    public showHideIcon: any;
    private showPassword = false;

    blocks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q'];
    selectedBlock = "";
    emailError = "";
    passError = "";
    loginError = "";

    emailHasFocus = false;
    passHasFocus = false;

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions,
    ) {
        this.user.email = "";
        this.user.password = "";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;

        if (isAndroid && device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);

            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    }



    blockSelect(){
        action("Select", "Cancel", this.blocks).then((result) => {
            if(result == 'Cancel') this.selectedBlock = "";
            else this.selectedBlock = result;
        });
    }
    login(){

    }

    onEmailFocus(){

    }

    getEmailError(){

    }

    hasEmailErrors(){

    }

    onPasswordFocus(){

    }

    showHidePassword(){

    }

    hasPasswordErrors(){

    }

    hasLoginErrors(){

    }

    getLoginError(){

    }

    getPasswordError(){

    }
}
