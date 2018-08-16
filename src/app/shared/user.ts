import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class User {
    username: string;
    password: string;
    score: number;


    constructor(username: string, password: string, score?: number) {
        this.username = username;
        this.password = password;
        this.score = score;
    }


}

