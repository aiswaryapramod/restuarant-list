import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {

  id:any
  rName:any
  neighborhood:any
  photograph:any
  Monday:any
  Tuesday:any
  Wednesday:any
  Thursday:any
  Friday:any
  Saturday:any
  Sunday:any
  address:any
  lat:any
  lng:any
  cuisine_type:any
  rvName:any
  date:any
  rating:any
  comments:any
  reviewArray:any=[]



constructor(private restApi:RestuarantApiService,private router:Router){}


  ngOnInit(): void {
  }
//userdefined function  
addRestuarant(){
  let addProduct={
    id:parseInt(this.id),
    name:this.rName,
    neighborhood:this.neighborhood,
    photograph:this.photograph,
    address:this.address,
    latlng:{
      lat:this.lat,
      lng:this.lng
    },
    cuisine_type:this.cuisine_type,
    operating_hours:{
      Monday:this.Monday,
      Tuesday:this.Tuesday,
      Wednesday:this.Wednesday,
      Thursday:this.Thursday,
      Friday:this.Friday,
      Saturday:this.Saturday,
      Sunday:this.Sunday
    },
    reviews:[
      {
        name:this.rvName,
        date:this.date,
        rating:parseInt(this.rating),
        comments:this.comments
      }

    ]
    
  }

  console.log(addProduct);
  this.restApi.addRestuarant(addProduct)
  .subscribe(()=>{
    alert('New Restuarant added Successfully!!!')
    this.router.navigateByUrl('')
  })

  
}

}