import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckpointService {

  checkpoints: Observable<any[]>;
  
  constructor(db: AngularFireDatabase) {
    this.checkpoints = db.list<any>('checkPoints').valueChanges();
  }

}
