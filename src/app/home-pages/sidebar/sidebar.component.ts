import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  fillerNav=[
    {name:"Dashboard",route:"",icon:"dashboard"},
    {name:"Bandeja de documentos",route:"",icon:"bandeja"},
    {name:"certificados",route:"",icon:"certificados"},
    {name:"Permisos/licencias",route:"",icon:"permisos"},
    {name:"Registrar Asistencia",route:"",icon:"asistencia"}
  ]
    

   // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  
   /* fillerContent = Array.from(
      {length: 50},
      () =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    );*/
  
    private _mobileQueryListener: () => void;
  
    constructor(changeDetectorRef: ChangeDetectorRef) {
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }
  
    shouldRun = true;
  }