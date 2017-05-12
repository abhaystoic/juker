System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Music;
    return {
        setters:[],
        execute: function() {
            Music = (function () {
                function Music(title, size, lastModifiedDate) {
                    this.title = title;
                    this.size = size;
                    this.lastModifiedDate = lastModifiedDate;
                }
                return Music;
            }());
            exports_1("Music", Music);
        }
    }
});
//# sourceMappingURL=music-properties.js.map