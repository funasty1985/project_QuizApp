import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Quiz } from "./quiz.model";

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource
{
    baseUrl!: string;
    authToken!: String;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    }

    constructor(private http: HttpClient)
    {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getQuizes(): Observable<Quiz[]>
    {
        return this.http.get<Quiz[]>('api/quiz');
    }

    private loadToken(): void
    {
        const token = localStorage.getItem('id_token');
        this.authToken = token!;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `${this.authToken}`) //??
    }
}