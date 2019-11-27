import { FrontService } from './front/front.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';


@NgModule({
    declarations: [
        AppComponent,
        FrontComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [FrontService],
    bootstrap: [AppComponent]
})
export class AppModule { }
