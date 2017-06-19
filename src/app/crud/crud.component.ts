import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  smartphone;
  text;
  oldText;
  appState='default';
  constructor(private _crudService:CrudService) { }

  ngOnInit() {
    this.smartphone=this._crudService.getSmartphone(); 
  }

  addSmartphone(){
    var newPhone={
      text:this.text
    }
    this.smartphone.push(newPhone);
    this._crudService.addSmartphone(newPhone);
  }

  deleteSmartphone(phoneText){
    for(var i=0;i<this.smartphone.length;i++){
      if(this.smartphone[i].text==phoneText){
        this.smartphone.splice(i,1);
      }
    }
    this._crudService.deleteSmartphone(phoneText);
  }

  editSmartphone(phonelist){
    this.appState='edit';
    //console.log(this.appState);
    this.oldText=phonelist.text;
    this.text=phonelist.text;
  }

  updateSmartphone(){
    //console.log(this.text);
    for(var i=0;i<this.smartphone.length;i++){
      if(this.smartphone[i].text==this.oldText){
        this.smartphone[i].text=this.text;
      }
    }    
      //console.log(this.oldText);
      //console.log(this.text);
      this._crudService.updateSmartphone(this.oldText,this.text);
  }


}
