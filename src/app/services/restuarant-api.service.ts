import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestuarantComponent } from '../delete-restuarant/delete-restuarant.component';

@Injectable({
  providedIn: 'root'
})
export class RestuarantApiService {
  // deleterestuarant(restId: any) {
  //   throw new Error('Method not implemented.');
  // }
  search=new BehaviorSubject("")
  constructor(private api:HttpClient) { }  //dependency injection

//to get all restuarant details Api call

allRestuarantList(){
  return this.api.get('http://localhost:3000/restaurants')
}
//get only user requested restuarant
viewRestuarant(restId:any){
 return this.api.get('http://localhost:3000/restaurants/'+restId)
}
//add a new restuarant api-post
addRestuarant(restBody:any){
  return this.api.post('http://localhost:3000/restaurants',restBody)

}

//update a perticular restuarantvapi-put

updaterestuarant(restId:any,restBody:any){
  return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)
}
//delete a perticular reatuarant api - delete
DeleteRestuarant(restId:any){
return this.api.delete('http://localhost:3000/restaurants/'+restId)
}
}

