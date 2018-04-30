import { Injectable } from '@angular/core';
import { Request, Response } from '@ng-ally/router';
import { DatabaseService } from '@ng-ally/database';


@Injectable()
export class IndexUsersRequest{

    constructor(request: Request, response: Response, db: DatabaseService)
    {
        db.collection('users')
        .find()
        .toArray()
        .then(users => {
            response.send({users})
        })
    }
}