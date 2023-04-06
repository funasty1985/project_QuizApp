import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';
import { BasePageComponent } from "./base-page/base-page.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";


@NgModule({
    imports: [BrowserModule, FormsModule, RouterLink],

    declarations: [
        BasePageComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        BasePageComponent,
        FooterComponent,
        HeaderComponent
    ]   // we can export more than one component
})
export class PartialModule { }
