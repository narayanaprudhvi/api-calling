import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get-Api';
  
constructor(private api:ApiServiceService){}
ngOnInit(){
  this.api.getApi().subscribe((data)=>{
    console.log('this is api calling method', data);
   
  })
}
 
}
