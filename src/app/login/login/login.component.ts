import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   *
   */
  constructor(private router:Router) {
    
    
  }

  ngOninit(){
   this.reload();
  }
  reload(){
    for(var i=0;i<1;i++){
      window.location.reload();
    }
  }
  redirect(){
    
    this.router.navigate(['/roles']);
    
  }
onSubmit() {
throw new Error('Method not implemented.');
}

}
