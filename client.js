
let myNameIs = "Carl";
onNet("unky:loaded", (newName) => {
    myNameIs = newName;
    console.warn(`Someone change your name to ${newName}`);

    if (newName.toLowerCase() === "idiot") {
        console.warn("Looks like he didn't like you.");
    }
});
onNet("onResourceStart",(data)=>{
    console.log(data)
})
