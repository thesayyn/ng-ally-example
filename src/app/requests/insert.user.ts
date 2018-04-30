import { Injectable } from '@angular/core';
import { Request, Response } from '@ng-ally/router';
import { DatabaseService } from '@ng-ally/database';


@Injectable()
export class InsertUserRequest{

    constructor(request: Request, response: Response, db: DatabaseService)
    {
        db.collection('users')
        .insertOne({
            username: 'holy',
            password: 'moly',
        })
        .then(()=>{
            response.send({
                status: true
            })
        })
    }
}