import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersTable } from './users.table';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class FakeAPIService implements InMemoryDbService {
  constructor() {}

  /**
   * Create Fake DB and API
   */
  createDb(): {} | Observable<{}> {
    const db = {
      // auth module
      users: UsersTable.users,
    };
    return db;
  }
}
