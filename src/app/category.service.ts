import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  categories: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.categories = db.object<any>('categories').valueChanges();
  }

}
