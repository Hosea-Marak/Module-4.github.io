(function(){
    var names =["Hosea","Tangrime","John","Emily","Sam","Bob","Paul","Jacob","Paulo","Eric","Cena","disco","dj khalid","john cena","jimmy"];
    // for(var i=0;i<names.length;i++){
    //     var firstletter = names[i].charAt(0).toLowerCase();
    //     if(firstletter === 'j'){
    //         byespeak.speak(names[i]);
    //     }
    //     else{
    //        hellospeak.speak(names[i]);
    //     }
    // }
    for (name in names){
        name = names[name];
        if(name[0].toLowerCase()=='j'){
            byespeak.speak(name);
        }
        else{
            hellospeak.speak(name);
        }
    }
})();