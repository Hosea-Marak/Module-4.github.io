(function(window){
    var speakWord = "Good Bye ";
    var byespeak={};
    byespeak.speak=function(name){
        console.log(speakWord + "" + name)
    }
    window.byespeak = byespeak; 
})(window);

