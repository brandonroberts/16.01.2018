import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpWrapperService } from '../services/httpWrapper.service';

@Injectable()
export class AccountService {
  private actionUrl: string;

  constructor(private http: HttpWrapperService) {
    this.actionUrl = 'anything';
  }

  all(): Observable<any[]> {
    return this.http.get('url');
  }

  search(searchname: string): Observable<any[]> {
    return this.http.get('url');
  }

  searchById(id: string): Observable<any> {
    return this.http.get('url');
  }

  insert(account: any): Observable<any> {
    return this.http.post('url', {});
  }

  copy(account: any): Observable<any> {
    return this.http.post('url', {});
  }

  update(account: any): Observable<any> {
    return this.http.put('url', '');
  }

  patch(origaccount: any, newaccount: any): Observable<any> {
    return this.http.patch('url', {});
  }

  delete(account: any): Observable<any> {
    return this.http.delete('url');
  }

  restore(account: any): Observable<any> {
    account.stateCodeId = null; // set the state back to active
    return this.update(account);
  }
}
