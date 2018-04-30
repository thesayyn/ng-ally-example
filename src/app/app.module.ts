import { NgModule } from '@angular/core';
import { ServerModule } from '@ng-ally/platform-server';
import { RouterModule, ROUTER_GUARDS } from '@ng-ally/router';
import { DatabaseModule } from '@ng-ally/database'

import { NotMatchedRouteGuard } from './not_matched_route_handler.guard';
import { InsertUserRequest } from './requests/insert.user';
import { IndexUsersRequest } from './requests/index.users';

@NgModule({
  imports: [
    ServerModule,
    RouterModule.forRoot([
      {
        path: 'users',
        children: [
          {
            type: 'GET',
            path: '',
            request: IndexUsersRequest
          },
          {
            type: 'POST',
            path: '',
            request:  InsertUserRequest
          }
        ]
      }
    ]),
    DatabaseModule.withConnection({
      host: 'localhost',
      database: 'ng-ally'
    })
  ],
  providers: [
    {
      provide: ROUTER_GUARDS,
      multi: true,
      useClass: NotMatchedRouteGuard
    }
  ]
})
export class AppModule { 
  ngDoBootstrap(){}
}
