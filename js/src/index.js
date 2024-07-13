import {alertDialog} from '@overextended/ox_lib/client';


RegisterCommand("+oo", 	async ()=>{
  
  const alert = await alertDialog({
    header: 'Hello there',
    content: 'General Kenobi  \n Markdown support!',
    centered: true,
    cancel: true,
  });
  exports.qb-menu.openMenu([
    {
        header : "< Go Back",
    },
    {
        header : "Number: ",
        txt: "Other",
        params: {
            event : "qb-menu:client:testButton",
            args : {
                message : "This was called by clicking this button"
            }
        }
    },
])
console.log("nihao,did qbcore worked? ")
  console.log(alert);
}, 	false);
RegisterKeyMapping("+oo", 
	"第一个keybind","keyboard", "o"
);
