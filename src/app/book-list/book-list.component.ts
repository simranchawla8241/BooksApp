import { Component, OnInit } from '@angular/core';
import {BookDataService} from '../book-data.service';
import {AppRoutingModule} from '../app-routing.module';
import {Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  arrCase:Object [];
  Results:Object[];
  SearchResults:Object[];
  public book: Object[]=[];
  public bookSearch: Object[]=[];
  message:string;
  search_str:string;
  fiction:any[];
  book_name:string;
  book_author:string;
  authors:any[];
  book_img:string;
  map={"Fiction":1,"History":2,"Drama":3,"Humor":4,"Philosophy":5,"Adventure":6,"Politics":7}
  displaySearch:boolean;
  
  constructor(private bookDataService:BookDataService,private router: Router) { }



  ngOnInit() {
    this.displaySearch=false;
    this.bookDataService.currentMessage.subscribe(message => this.message = message) //subscribing to the results

    this.bookDataService.getBooks().
    subscribe(data=>{
      this.arrCase = data as object [];  // FILL THE ARRAY WITH DATA.
 
    //results object storing in array
    this.Results = data["results"] ;
    
    for(var j=0;j<this.Results.length;j++)//for loop for iterating through result array
    {
      var subject=this.Results[j]["subjects"]; //checking the genre of the books by iterating through subject array
      let flag: number=0;
      //checks the genre of the book
      for(var i=0;i<subject.length;i++)
      {
        
        if(subject[i].includes(this.message)) //checks the keys of the hashmap and if match then set the flag
        {
          flag=this.map[this.message];
          console.log("flag is: "+flag);
          break;
        }
      }
      switch(flag)//depending on value of flag for each result storing it in books array
      {
        case 1:
          
          for(let key in this.Results[j])
          {
            if(key=='title')
            {
              console.log("i am in title");
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
            if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }
           
          }

         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;

          case 2:
          
          for(let key in this.Results[j])
          {
            if(key=='title')
            {
              //console.log("i am in title");
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
            if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }
            
          }
 
         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;

          case 3:
          //console.log(typeof this.Results[j]);
          for(let key in this.Results[j])
          {
            if(key=='title')
            {
              console.log("i am in title");
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
            if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }

          }
         
         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;

          case 4:
          //console.log(typeof this.Results[j]);
          for(let key in this.Results[j])
          {
            if(key=='title')
            {
              console.log("i am in title");
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
            if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }
            //this.fiction.push(new this.storeBook(this.book_name,this.authors[0]["name"]));  
          }
         //this.fiction.push(this.Results[j]);
         //console.log("Length of array:"+this.fiction.length);
         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;

          case 5:
          //console.log(typeof this.Results[j]);
          for(let key in this.Results[j])
          {
            if(key=='title')
            {
              console.log("i am in title");
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
            if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }
            //this.fiction.push(new this.storeBook(this.book_name,this.authors[0]["name"]));  
          }
         //this.fiction.push(this.Results[j]);
         //console.log("Length of array:"+this.fiction.length);
         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;

          case 6:
          //console.log(typeof this.Results[j]);
          for(let key in this.Results[j])
          {
            if(key=='title')
            {
              console.log("i am in title");
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
            if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }
          }
       
         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;


          case 7:
            for(let key in this.Results[j])
          {
            if(key=='title')
            {
              
              this.book_name=JSON.stringify(this.Results[j]['title']);
              
              console.log(this.book_name);
              
            }
              if(key=='authors')
            {
              console.log("i am in authors");
              this.authors=this.Results[j]['authors'];
              
                console.log(this.authors[0]["name"]);
              
            }
            
          }
       
         this.book.push(this.Results[j]);
         console.log(this.book.length);
          break;
      }//switch closing
 
    }//for closing
    
    
    });

  }


  //search logic
  OnSearch(type:string,value:string)
  {
    this.displaySearch=true;
    console.log(this.displaySearch);
    console.log("i am in search function: "+value);
    this.bookDataService.currentMessage.subscribe(message => this.message = message)

    //subscribes to search api results
    this.bookDataService.getBooksOnSearch(value).
    subscribe(data=>{
      this.arrCase = data as object [];  // FILL THE ARRAY WITH DATA.
 
    //results object storing in array
    this.SearchResults = data["results"] ;
    this.book.length=0;
    for(var j=0;j<this.SearchResults.length;j++)
    {
      this.bookSearch.push(this.SearchResults[j]); 
    }


    });
    
  }

}



    

        

  