import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{InterestsService} from '../interests/interests.service'
import 'rxjs/add/operator/map';
@Injectable()
export class InterestsChartService {

  constructor(private http: Http,private service:InterestsService) { }

	getLabels(){
/*		this.service.
*/	}
}
