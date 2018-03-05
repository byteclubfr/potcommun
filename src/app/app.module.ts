import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LayoutModule } from "@angular/cdk/layout";
import { environment } from "../environments/environment";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";
// not used in production
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RouterEffects } from "./store/router.effect";
import { CustomSerializer } from "./store/router.serializer";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminGuard } from "./admin.guard";
import { SessionService } from "./session.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ routerReducer }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([RouterEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 10 }),
    LayoutModule
  ],
  providers: [
    AdminGuard,
    SessionService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
