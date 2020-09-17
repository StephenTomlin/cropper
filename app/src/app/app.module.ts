import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { HeaderComponent } from './prefabs/header/header.component';
import { FooterComponent } from './prefabs/footer/footer.component';
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { UserEffects } from './effects/user.effects';
import {userReducer } from './_reducers/user.reducer'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { UserEffects } from './_effects/user.effects';
// import { _userReducer } from './_reducers/user.reducer'

const firebaseConfig = {
  apiKey: "AIzaSyAHG9wcpc9TU5IXqf0LamsRawlpGx3qeLw",
  authDomain: "cropper-bb159.firebaseapp.com",
  databaseURL: "https://cropper-bb159.firebaseio.com",
  projectId: "cropper-bb159",
  storageBucket: "cropper-bb159.appspot.com",
  messagingSenderId: "966746658747",
  appId: "1:966746658747:web:03981cf7a2f54c3888969e",
  measurementId: "G-ERB8WBLQCS"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    RegisterModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    EffectsModule.forRoot([
      UserEffects
    ]),

    StoreModule.forRoot({user: userReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
