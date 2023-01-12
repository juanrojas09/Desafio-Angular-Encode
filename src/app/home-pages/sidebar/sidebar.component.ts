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
  opened=true;

   
  
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