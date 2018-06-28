import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component'
import {ProductComponent} from './product.component'
import {ErrorComponent} from './error.component'
import {ProductDetailComponent} from './product-detail.component'
import {ProductService} from './product.service';
import {appRoutes} from './app.routes';
import {MsGraphComponent} from "./msGraph.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MsalModule, MsalInterceptor} from "ms-msal-angular";
import {LogLevel} from "msal";
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoListService} from "./todo-list/todo-list.service";
import {MsGraphService} from "./msGraph.service";
import { UserDataComponent } from './user-data/user-data.component';
import { ConfigComponent } from './config/config.component';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log("client logging" + message);
}

export const protectedResourceMap: Map<string, Array<string>> = new Map<string, Array<string>>();
export const startDate = new Date();
export const endDate = new Date();
endDate.setDate(startDate.getDate()+7);
protectedResourceMap.set("https://graph.microsoft.com/beta/me/calendarview?startdatetime=" +startDate.toLocaleDateString("en-US") + "&enddatetime="+ endDate.toLocaleDateString("en-US")+ "&$select=subject,start,end&$orderBy=start/dateTime", [ "calendars.read"]);
protectedResourceMap.set("https://buildtodoservice.azurewebsites.net/api/todolist", ["api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"]);

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductComponent, ErrorComponent, ProductDetailComponent, MsGraphComponent, TodoListComponent, UserDataComponent, ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MsalModule.forRoot({
       // clientID: 'f3e5cf63-6c0d-42cb-b5aa-ee58b1ef7523',
      //  clientID: '6226576d-37e9-49eb-b201-ec1eeb0029b6',
		  clientID: '79d1dd3f-4de3-4b69-ac25-f2fc5eefe773',
       authority: "https://login.microsoftonline.com/msidlab4.onmicrosoft.com/",
        validateAuthority: true,
        redirectUri: "https://msalangularsample.azurewebsites.net/",
        cacheLocation : "localStorage",
        postLogoutRedirectUri: "https://msalangularsample.azurewebsites.net",
        navigateToLoginRequestUrl: true,
        popUp: false,
      // consentScopes: [ "calendars.read", "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"],
    //  consentScopes: [ "calendars.read"],
        unprotectedResources: ["https:google.com"],
        protectedResourceMap: protectedResourceMap,
        logger: loggerCallback,
        correlationId: '1234',
        level: LogLevel.Info,
        piiLoggingEnabled: true

      }
    ),
  ],
  providers: [ProductService, TodoListService, MsGraphService,
     {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
