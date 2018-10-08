import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { KeysPipe } from './infocus-report/infocus-template-one-three-two-three/infocus-template-one-three-two-three.component';
import { TokenInterceptor } from './core/auth/token-interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,KeysPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports:[
    HttpClientModule
  ]
})
export class AppModule {}
