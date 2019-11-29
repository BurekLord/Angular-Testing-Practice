import { AnotherService } from './front/another.service';
import { FrontService } from './front/front.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LlamaComponent } from './llama/llama.component';


const appRoutes: Routes = [
    { path: '', component: FrontComponent },
    {
        path: 'llama/:id', component:
            LlamaComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        FrontComponent,
        LlamaComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        HttpClientModule
    ],
    providers: [FrontService, AnotherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
