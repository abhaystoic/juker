import {Component, ElementRef, Input, ViewChild} from "angular2/core";
import {Music} from "./music-properties";

@Component({
  selector: "upload-form",
  templateUrl: "app/upload-form/upload-form.tpl.html",
  styleUrls: ["app/upload-form/mdb.min.css"]
})

export class UploadFormComponent {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  arrayOfKeys = [];
  musicQueue = [];
  
  constructor() {}

  active = true;

  addMusic() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    let item;
    if(fileCount > 0){
      for(let i=0; i<fileCount; i++){
        console.log(inputEl.files.item(i));
        // formData.append('file[]', inputEl.files.item(i));
        item = inputEl.files.item(i);
        this.musicQueue.push({name : item.name,
                              size : item.size,
                              lastModifiedDate: item.lastModifiedDate
        });
      }
      this.arrayOfKeys = Object.keys(this.musicQueue);
    }
  }
}
