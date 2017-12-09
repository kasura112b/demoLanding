import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GallerySerivce {
  private apiUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}
  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
    // return data;
  }
}

export const data = [
    {
        id: '1',
        name: 'hello'
    }
];
