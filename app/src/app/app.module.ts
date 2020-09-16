import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { ButtonComponent } from './prefabs/button/button.component';
import { FormComponent } from './prefabs/form/form.component';
import { HeaderComponent } from './prefabs/header/header.component';
import { FooterComponent } from './prefabs/footer/footer.component';
import { InputComponent } from './prefabs/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
