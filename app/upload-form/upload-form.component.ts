import {Component, ElementRef, Input, ViewChild} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {Music} from "./music-properties";

@Component({
  selector: "upload-form",
  templateUrl: "app/upload-form/upload-form.tpl.html",
  styleUrls: [
                "app/upload-form/mdb.css",
                "app/upload-form/upload-form.css"
             ]
})

export class UploadFormComponent {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  arrayOfKeys = [];
  musicQueue = [];
  
  constructor(public http: Http) {}

  active = true;

  addMusic() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    let item;
    if(fileCount > 0){
      for(let i=0; i<fileCount; i++){
        console.log(inputEl.files.item(i));
        item = inputEl.files.item(i);
        this.musicQueue.push({
                              name : item.name,
                              size : item.size,
                              lastModifiedDate: item.lastModifiedDate
        });
      }
      this.arrayOfKeys = Object.keys(this.musicQueue);
      
      //Attempt to upload
      this.upload(inputEl.files)
          .subscribe(res => {
            console.log(res);
      });
    }
  }

  upload(fileToUpload: any) {
      console.log("fileToUpload===", fileToUpload);
      let input = new FormData();
      input.append("file", fileToUpload);

      const headers = new Headers();
      headers.append('Access-Control-Request-Headers', 'Content-Type');
      headers.append('Access-Control-Request-Method', 'POST');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      
      console.log("input===", input, headers);
      return this.http.post("http://localhost:8081/upload/", input, {"Headers": headers});
  }
}
