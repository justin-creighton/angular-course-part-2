import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// NEEDED TO USE OBSERVABLES
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  // WHEN MAKING HTTP REQUESTS WE USE OBSERVABLES
  // APPLYING THE SINGLE RESPONSIBILITY PRINCIPLE
  loadData(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/').pipe(
      // USING PIPE AND MAP TO TRANSFORM DATA WHILE IT'S BEING RECEIVED
      map((data) => {
        return data.results[0];
      }),
      map((userInfoRaw) => {
        return {
          firstName: userInfoRaw.name.first,
          lastName: userInfoRaw.name.last,
        };
      })
    );
  }
}
