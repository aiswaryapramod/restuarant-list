import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-restuarantlist',
  templateUrl: './restuarantlist.component.html',
  styleUrls: ['./restuarantlist.component.css']
})
export class RestuarantlistComponent implements OnInit {

  //restName="Resto cafe cochin"
  restuarantLists:any;
  // lDate:any
  filterString:any="";
  constructor(private restApi:RestuarantApiService) { }

  ngOnInit(): void {
    //asynchronous 
    this.restApi.allRestuarantList()
    .subscribe((result)=>{
     console.log(result);
     this.restuarantLists = result
     })
     //to get search term from service
    this.restApi.search.subscribe((data)=>{
    this.filterString =data
    console.log(this.filterString);
    
    })
  }

}
