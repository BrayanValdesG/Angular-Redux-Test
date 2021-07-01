import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceHelperService<T, P> {

  private protocol: HttpClient;
  private headers: HttpHeaders;
  private url: string;

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.protocol = this.http;
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
    this.url = baseUrl;
  }

  getData(requestURL: string, remoteURL: string = ""): Observable<T> {
    const options = {
      headers: this.headers
    };

    if (remoteURL !== "") {
      return this.protocol.get<T>(remoteURL + requestURL, options)
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError));
    } else {
      return this.protocol.get<T>(this.url + requestURL, options)
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError));
    }
  }

  postData(uri: string, data: P): Observable<T> {
    const options = {
      headers: this.headers
    };

    return this.protocol.post(uri, data, options)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }

  putData(uri: string, data: P): Observable<T> {
    const options = {
      headers: this.headers
    };

    return this.protocol.put(uri, data, options)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }

  deleteData(uri: string, data: P): Observable<T> {

    return this.protocol.delete(uri, data)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }

  // Return json request
  private extractData(res: any) {
    if (res.status < 200 || res.status >= 300 ) {
      throw new Error("Bad response status: " + res.status);
    }

    return res;
  }

  // Error handling
  private handleError(error: any) {
    const errMsg = error.message || "Server error";
    console.error("Error communicating to service: " + errMsg);
    return throwError(errMsg);
  }
}
