(function(){
    var names =["Yaakov","John","Jen","jason","Paul","Frank","Larry","Paula","Laura","Jim"];
    for(var i=0;i<names.length;i++){
        var firstletter = names[i].charAt(0).toLowerCase();
        if(firstletter === 'j'){
            byespeak.speak(names[i]);
        }
        else{
           hellospeak.speak(names[i]);
        }
    }

})();