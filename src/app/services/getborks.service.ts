import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetborksService {

  constructor(private http:HttpClient) { }

  url: string = 'http://localhost:5000/dogs'

  getDoggos() {
    return this.http.get<any[]>(`${this.url}`);
  }

  postDoggos(body) {
    try {
      return this.http.post<any>(this.url, body);
    }
    catch (err) {
      console.log(err);
    }
  }

  updateDoggo(body) {
    return this.http.put<any>(this.url, body);
  }

  removeDoggo(body) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        name: body.name
      },
    };
    return this.http.delete<any>(this.url, options);
  }
}
