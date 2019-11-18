import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  public a : any = {
    name : '',
    pwd : '',
  }
  
account:any;
  
  constructor(
    private loginService: ServiceService,
    public route : Router,
  ) { }
  
  ngOnInit() {

    
  }
  gatA(){
    
    this.loginService.login(this.a).subscribe((res:any)=>{
      console.log(res);
     
   
     if(res.code === 0){
     
      window.sessionStorage.setItem('auth',this.a.name);
      this.route.navigate(['/list/']);
       console.log(res);
     } else{
       alert(res.message);
     }

   });
     console.log(this.a);
    
      
  }
}
