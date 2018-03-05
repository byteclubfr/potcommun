import { Injectable, transition } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { _throw } from "rxjs/observable/throw";
import { catchError } from "rxjs/operators/catchError";
import { map } from "rxjs/operators/map";

import { environment } from "../../environments/environment";
import { Friend } from "./friend";
import { Transaction } from "./transaction";

@Injectable()
export class FriendService {
  constructor(private http: HttpClient) {}

  getFriends(): Observable<Array<Friend>> {
    return this.http
      .get<Array<Friend>>(environment.friendApi)
      .pipe(catchError(this.handleError));
  }

  getFriend(id: number): Observable<Friend> {
    return this.http
      .get<Friend>(`${environment.friendApi}/${id}`)
      .pipe(catchError(this.handleError));
  }

  saveFriend(friend: Friend): Observable<Friend> {
    return friend.id ? this.updateFriend(friend) : this.createFriend(friend);
  }

  updateFriend(friend: Friend): Observable<Friend> {
    return this.http
      .put<Friend>(`${environment.friendApi}/${friend.id}`, friend)
      .pipe(catchError(this.handleError));
  }

  createFriend(friend: Friend): Observable<Friend> {
    return this.http
      .post<Friend>(environment.friendApi, friend)
      .pipe(catchError(this.handleError));
  }

  removeFriend(friend): Observable<Friend> {
    return this.http
      .delete<Friend>(`${environment.friendApi}/${friend.id}`, friend)
      .pipe(map(() => friend), catchError(this.handleError));
  }

  private handleError(error): Observable<any> {
    console.log("ERROR", error);
    return _throw(error);
  }
}
