import { Component, OnInit } from '@angular/core';
import { GoogleAcademic } from 'src/app/models/google-academic';
import { Universidades } from 'src/app/models/universidades';
import { CallApiService } from 'src/app/servives/call-api.service';
import { SharedDataService } from 'src/app/servives/shared-data.service';




@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  universidades:Universidades
  googleAcademico:GoogleAcademic[]
  panelOpenState = false;


  displayedColumns: string[] = ['id', 'autor','titulo','url'];
  displayedColumnsGoogle: string[] = ['id', 'text','urlText','url'];

  constructor(public api:CallApiService,public sharedData:SharedDataService) { }

  ngOnInit() {
    
    var dataSearch=this.sharedData.getData()
     this.api.universidades(dataSearch.filtro).subscribe((data:Universidades)=>{
       this.universidades=data
       console.log(this.universidades)
      },error=>{
        alert("error");
        console.error(error)
      })

      this.api.googleSearch(dataSearch.filtro).subscribe((data:GoogleAcademic[])=>{
        this.googleAcademico=data
        console.log(this.googleAcademico)
       },error=>{
         alert("error");
         console.error(error)
       })

  }

}
