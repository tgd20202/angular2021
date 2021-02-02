import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/servives/shared-data.service';


interface catalog {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  filterCatalogo:string=""

  buscarForm= new FormGroup({
    filtro:new FormControl('',Validators.required)
  })

  openJourlan: catalog[] = [
    {value: 'todo', viewValue: 'Buscar Todo'},
    
  ];
  googleAcademics: catalog[] = [
    {value: 'todo', viewValue: 'Buscar Todo'}
    
  ];
  catalogs: catalog[] = [
    {value: 'poli', viewValue: 'POLI'},
    {value: 'udea', viewValue: 'UDEA'},
    {value: 'itm', viewValue: 'ITM'},
    {value: 'usbmed', viewValue: 'USBMED'},
    {value: 'poligran', viewValue: 'POLIGRAN'},
    {value: 'ceipa', viewValue: 'CEIPA'},
    {value: 'colegiatura', viewValue: 'COLEGIATURA'},
    {value: 'unal', viewValue: 'UNAL'},
    {value: 'todo', viewValue: 'BUSCAR TODOS'}
  ];

  constructor(public sharedData:SharedDataService,public router:Router) { }

  ngOnInit() {
  
  }
  buscar(buscarForm:FormGroup){

    if (buscarForm.valid) {
      this.sharedData.setData(buscarForm.value)
      this.router.navigate(['resultados'])
    }

  }

}
