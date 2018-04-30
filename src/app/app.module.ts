import { ServerModule } from '@ng-ally/platform-server';
import { NgModule } from '@angular/core';
import { RouterModule, ROUTER_GUARDS } from '@ng-ally/router';

import { NotMatchedRouteGuard } from './not_matched_route_handler.guard';

@NgModule({
  imports: [
    ServerModule,
    RouterModule.forRoot([])
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
