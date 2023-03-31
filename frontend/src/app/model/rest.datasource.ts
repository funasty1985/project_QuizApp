import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
// import { JwtHelperService } from '@auth0/angular-jwt'
import { Quiz } from "./quiz.model";
import { environment } from "src/environments/environment";

const { protocol, port } = environment;
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
        console.log("env :: ", environment);
        this.baseUrl = `${protocol}://${location.hostname}${!port ? "": `:${port}`}/`;
    }

    getQuizes(): Observable<Quiz[]>
    {
        return this.http.get<Quiz[]>( this.baseUrl + 'api/quiz');
    }

    private loadToken(): void
    {
        const token = localStorage.getItem('id_token');
        this.authToken = token!;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `${this.authToken}`) //??
    }
}