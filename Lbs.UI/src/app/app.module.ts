import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GoogleAPIService } from './services/google-map.services';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { GraphQLModule } from './graphql.module';
import { ApiGetService } from './services/api-get.service';
import { TableElementComponent } from './table-list/elements/table-element/table-element.component';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    JsonpModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoCHGzZmNSFKhEbDjsughQ4x8BXmNvT4'
    }),
    GraphQLModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [GoogleAPIService, ApiGetService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
