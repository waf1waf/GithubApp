import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string; // Github Username

  constructor(private _http: Http){
    this.username = 'waf1waf';
  }

  /**
   * Get the user profile information
   * @returns {Observable<R>} The user profile information
   */
  getUser() {
    return this._http.get("https://api.github.com/users/" + this.username)
      .map(res => res.json());
  }

  /**
   * Get the user repositories
   * @returns {Observable<R>} The user repositories
   */
  getRepos() {
    return this._http.get("https://api.github.com/users/" + this.username + "/repos")
      .map(res => res.json());
  }

  /**
   * Update the user based on the user name
   * @param username Then Github username
   */
  updateUser(username: string) {
    this.username = username;
  }
}
