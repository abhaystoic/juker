System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var UploadFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UploadFormComponent = (function () {
                function UploadFormComponent(http) {
                    this.http = http;
                    this.multiple = false;
                    this.arrayOfKeys = [];
                    this.musicQueue = [];
                    this.active = true;
                }
                UploadFormComponent.prototype.addMusic = function () {
                    var inputEl = this.inputEl.nativeElement;
                    var fileCount = inputEl.files.length;
                    var formData = new FormData();
                    var item;
                    if (fileCount > 0) {
                        for (var i = 0; i < fileCount; i++) {
                            console.log(inputEl.files.item(i));
                            item = inputEl.files.item(i);
                            this.musicQueue.push({
                                name: item.name,
                                size: item.size,
                                lastModifiedDate: item.lastModifiedDate
                            });
                        }
                        this.arrayOfKeys = Object.keys(this.musicQueue);
                        //Attempt to upload
                        this.upload(inputEl.files)
                            .subscribe(function (res) {
                            console.log(res);
                        });
                    }
                };
                UploadFormComponent.prototype.upload = function (fileToUpload) {
                    console.log("fileToUpload===", fileToUpload);
                    var input = new FormData();
                    input.append("file", fileToUpload);
                    var headers = new http_1.Headers();
                    headers.append('Access-Control-Request-Headers', 'Content-Type');
                    headers.append('Access-Control-Request-Method', 'POST');
                    headers.append('Content-Type', 'application/json');
                    headers.append('Access-Control-Allow-Origin', '*');
                    console.log("input===", input, headers);
                    return this.http.post("http://localhost:8081/upload/", input, { "Headers": headers });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], UploadFormComponent.prototype, "multiple", void 0);
                __decorate([
                    core_1.ViewChild('fileInput'), 
                    __metadata('design:type', core_1.ElementRef)
                ], UploadFormComponent.prototype, "inputEl", void 0);
                UploadFormComponent = __decorate([
                    core_1.Component({
                        selector: "upload-form",
                        templateUrl: "app/upload-form/upload-form.tpl.html",
                        styleUrls: [
                            "app/upload-form/mdb.css",
                            "app/upload-form/upload-form.css"
                        ]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UploadFormComponent);
                return UploadFormComponent;
            }());
            exports_1("UploadFormComponent", UploadFormComponent);
        }
    }
});
//# sourceMappingURL=upload-form.component.js.map