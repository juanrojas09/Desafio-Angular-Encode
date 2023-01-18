import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.component.html',
  styleUrls: ['./cambio-pass.component.css']
})
export class CambioPassComponent {

  /**
   *
   */
  constructor(private route:Router) {
   
    
  }
  redirectLogin(){
   this.route.navigate(['/login']); 
  }
  saveData(){
   
     this.redirectLogin();
 
   }
}
