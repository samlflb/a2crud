import { Injectable } from '@angular/core';
import {Init} from './init-crud';

@Injectable()
export class CrudService extends Init {

  constructor() { 
    super();
    console.log('CrudService Initializd...');
    this.load();
  }
  
  getSmartphone(){
    var smartphone = JSON.parse(localStorage.getItem('phonelist'));
    return smartphone;
  }

  addSmartphone(newSmartphone){
    var phonelist = JSON.parse(localStorage.getItem('phonelist'));
    //add new phone 
    phonelist.push(newSmartphone)
    //set new phonelist
    localStorage.setItem('phonelist',JSON.stringify(phonelist));
  }

  deleteSmartphone(phoneText){
    var phonelist = JSON.parse(localStorage.getItem('phonelist'));

    for(var i=0;i<phonelist.length;i++){
      if(phonelist[i].text==phoneText){
        phonelist.splice(i,1);
      }
    } 
    //set new phonelist
    localStorage.setItem('phonelist',JSON.stringify(phonelist));
  }

  updateSmartphone(oldText,newText){
    var phonelist = JSON.parse(localStorage.getItem('phonelist'));

    for(var i=0;i<phonelist.length;i++){
      if(phonelist[i].text==oldText){
        phonelist[i].text=newText;
      }
    } 
    //set new phonelist
    localStorage.setItem('phonelist',JSON.stringify(phonelist));
  }


}
