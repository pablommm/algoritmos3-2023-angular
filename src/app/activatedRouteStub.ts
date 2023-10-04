import { BehaviorSubject } from 'rxjs';
import { convertToParamMap, ParamMap, Params } from '@angular/router';

export class ActivatedRouteStub {
  
  private subject = new BehaviorSubject<ParamMap>(convertToParamMap({}));

  
  paramMap = this.subject.asObservable();

  
  setParamMap(params: Params) {
    this.subject.next(convertToParamMap(params));
  }
}