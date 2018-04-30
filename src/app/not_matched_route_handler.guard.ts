import { Injectable, VERSION as NG_VERSION } from '@angular/core';
import { VERSION as TD_VERSION } from '@ng-ally/platform-server';
import { CanDeactivate, Request, Response } from '@ng-ally/router'
import { Observable } from 'rxjs';


@Injectable()
export class NotMatchedRouteGuard implements CanDeactivate {

    canDeactivate(request: Request, response: Response): boolean | Promise<boolean> | Observable<boolean> {
        if(!request.route) response.send({ 
            core:  NG_VERSION.full,
            server: TD_VERSION.full,
            engine: '@ng-ally/platform-server'
        })
        return true;
    }
}