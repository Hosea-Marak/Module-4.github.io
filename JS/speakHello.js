(function(window) {
    var speakWord = "Hello ";
    var hellospeak={};
    hellospeak.speak=function(name){
        console.log( speakWord + "" + name )
    }
    window.hellospeak = hellospeak;
})(window);

