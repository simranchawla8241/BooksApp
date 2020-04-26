import { Component, OnInit } from '@angular/core';
import {BookDataService} from '../book-data.service';
import { JsonPipe } from '@angular/common';
import {Book} from '../book';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit 
{
  arrCase:Object [];
  Results:Object[];
  books=[];
  fiction:any[];
print_flag:number=0;
  message:string;
  map={1:"Fiction",2:"History",3:"Drama",4:" Humor",5:"Philosophy",6:"Adventure",7:"Politics"}

  constructor(private bookDataService:BookDataService) { }

  ngOnInit() 
  {
    
    this.bookDataService.getBooks().
    subscribe(data=>{
      this.arrCase = data as object [];  // FILL THE ARRAY WITH DATA.
 
    //results object storing in array
    this.Results = data["results"] ;
    let flag: number=0;
    for(var j=0;j<this.Results.length;j++)
    {
      //console.log("Results type:"+typeof this.Results[j]);
      //console.log(this.Results[j]["subjects"]);
      var subject=this.Results[j]["subjects"];
      
      for(var i=0;i<subject.length;i++)
      {
       // console.log(typeof subject[i]);
        if(subject[i].includes(this.map[1]))
        {
          //console.log("Yes fiction is there:"+subject[i]);

          flag=1;
          break;
        }
        if(subject[i].includes("Philosophy"))
        {
          //console.log("Yes Philosophy is there:"+subject[i]);

          flag=2;
          break;
        }
        if(subject[i].includes("Drama"))
        {
         // console.log("Yes Drama is there:"+subject[i]);

          flag=3;
          break;
        }
        if(subject[i].includes("History"))
        {
          //console.log("Yes History is there:"+subject[i]);

          flag=4;
          break;
        }
        if(subject[i].includes("Humor"))
        {
          //console.log("Yes Humor is there:"+subject[i]);

          flag=5;
          break;
        }
        if(subject[i].includes("Adventure"))
        {
          //console.log("Yes Adventure is there:"+subject[i]);

          flag=6;
          break;
        }
        if(subject[i].includes("Politics"))
        {
          //console.log("Yes Politics is there:"+subject[i]);

          flag=7;
          break;
        }
        //putting inside array
        switch(flag)
        {
          case 1:
            this.fiction.push(this.Results[j]);
            console.log(this.fiction.length);
            break;
        }


      }
 
    }//for closing
    
    
    });

        

  }

  newMessage(num:number) {
    this.bookDataService.changeMessage(this.map[num]);
  }



}
