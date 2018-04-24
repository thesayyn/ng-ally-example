import { Injectable, VERSION as NG_VERSION } from '@angular/core';
import { VERSION as TD_VERSION } from '@tdadmin/platform-server';
import { CanDeactivate, Request, Response, CanActivate } from '@tdadmin/router'
import { Observable } from 'rxjs';


@Injectable()
export class NotMatchedRouteGuard implements CanActivate {

    canActivate(request: Request, response: Response): boolean | Promise<boolean> | Observable<boolean> {
        if(!request.route) response.send({ 
            core:  NG_VERSION.full,
            server: TD_VERSION.full,
            engine: '@tdadmin/platform-server'
        })
        return true;
    }
}