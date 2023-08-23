import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'contact', component: ContactComponent }
];

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC9IZxm7TXWDVbWm9w5wMWdjalss2Znlc",
  authDomain: "sharifa-abdool.firebaseapp.com",
  projectId: "sharifa-abdool",
  storageBucket: "sharifa-abdool.appspot.com",
  messagingSenderId: "932904136931",
  appId: "1:932904136931:web:a98a21cdd968c4963055d6",
  measurementId: "G-1SV05DH9H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    WorkPageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
