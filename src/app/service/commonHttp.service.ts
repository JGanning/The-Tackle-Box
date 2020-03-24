import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Adapter } from "../model/adapter";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    baseUrl = environment.serviceApi;

    constructor(private http: HttpClient) { }

    getRequest(link): Promise<Adapter<any>> {
        const _url: string = this.baseUrl + link;

        return this.http.get(_url).toPromise().then(response => {
            const _tempObject = response;
            return _tempObject;
        }).catch(this.handleError);
    }

    postRequest(link, body): Observable<any> {
        return this.http.post<any>(this.baseUrl + link, body);
    }

    private handleError(_error: any): Promise<any> {
        if(_error instanceof Response) {
            let _errMessage = '';
            try {
                _errMessage = '_error.json().error';
            } catch(err) {
                _errMessage = _error.statusText;
            }
            return Promise.reject(_errMessage);
        }
        return Promise.reject(_error || 'Unable to get response from server.');
    }
}