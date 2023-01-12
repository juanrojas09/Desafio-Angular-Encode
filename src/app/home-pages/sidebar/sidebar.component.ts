import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Data } from 'src/app/data/data';
import { DataService } from 'src/app/data/data.service';
import { DataImterface } from 'src/app/data/dataInterfaces';
import { RoleDataService } from '../../roleData/role-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // fillerNav=[
  //   {name:"Dashboard",route:"",icon:"dashboard"},
  //   {name:"Bandeja de documentos",route:"",icon:"bandeja"},
  //   {name:"certificados",route:"",icon:"certificados"},
  //   {name:"Permisos/licencias",route:"",icon:"permisos"},
  //   {name:"Registrar Asistencia",route:"",icon:"asistencia"}
  // ]
  opened=true;

   
  
   
    dataOpction: DataImterface[] = []
  
    constructor(private datos:DataService,private role:RoleDataService) {
 
     
      
    }
  ngOnInit(): void {

    //aca tengo que hacer un switch que verifique que rol es y de ahi retornar los datos que correspondan
var rol=this.role.getData();
console.log(rol)
  
    this.dataOpction=this.datos.getData(1);
     
    
    console.log(this.dataOpction)

  }


    ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }
  
    shouldRun = true;
  }