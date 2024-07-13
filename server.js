RegisterCommand("hello",function(source,args){

    emitNet("unky:loaded",-1,"luguan")
    console.log(source)
}, false);