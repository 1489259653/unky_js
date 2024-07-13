(()=>{"use strict";var e={507:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.boolean=void 0,o.boolean=function(e){switch(Object.prototype.toString.call(e)){case"[object String]":return["true","t","yes","y","on","1"].includes(e.trim().toLowerCase());case"[object Number]":return 1===e.valueOf();case"[object Boolean]":return e.valueOf();default:return!1}}},267:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.isBooleanable=o.boolean=void 0;const n=t(507);Object.defineProperty(o,"boolean",{enumerable:!0,get:function(){return n.boolean}});const r=t(139);Object.defineProperty(o,"isBooleanable",{enumerable:!0,get:function(){return r.isBooleanable}})},139:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.isBooleanable=void 0,o.isBooleanable=function(e){switch(Object.prototype.toString.call(e)){case"[object String]":return["true","t","yes","y","on","1","false","f","no","n","off","0"].includes(e.trim().toLowerCase());case"[object Number]":return[0,1].includes(e.valueOf());case"[object Boolean]":return!0;default:return!1}}},430:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.createPrintf=void 0;const n=t(267),r=t(868),i=(e,o)=>o.placeholder;o.createPrintf=e=>{var o;const t=(e,o,t)=>"-"===t?e.padEnd(o," "):"-+"===t?((Number(e)>=0?"+":"")+e).padEnd(o," "):"+"===t?((Number(e)>=0?"+":"")+e).padStart(o," "):"0"===t?e.padStart(o,"0"):e.padStart(o," "),l=null!==(o=null==e?void 0:e.formatUnboundExpression)&&void 0!==o?o:i,s={};return(e,...o)=>{let i=s[e];i||(i=s[e]=r.tokenize(e));let a="";for(const r of i)if("literal"===r.type)a+=r.literal;else{let i=o[r.position];if(void 0===i)a+=l(e,r,o);else if("b"===r.conversion)a+=n.boolean(i)?"true":"false";else if("B"===r.conversion)a+=n.boolean(i)?"TRUE":"FALSE";else if("c"===r.conversion)a+=i;else if("C"===r.conversion)a+=String(i).toUpperCase();else if("i"===r.conversion||"d"===r.conversion)i=String(Math.trunc(i)),null!==r.width&&(i=t(i,r.width,r.flag)),a+=i;else if("e"===r.conversion)a+=Number(i).toExponential();else if("E"===r.conversion)a+=Number(i).toExponential().toUpperCase();else if("f"===r.conversion)null!==r.precision&&(i=Number(i).toFixed(r.precision)),null!==r.width&&(i=t(String(i),r.width,r.flag)),a+=i;else if("o"===r.conversion)a+=(Number.parseInt(String(i),10)>>>0).toString(8);else if("s"===r.conversion)null!==r.width&&(i=t(String(i),r.width,r.flag)),a+=i;else if("S"===r.conversion)null!==r.width&&(i=t(String(i),r.width,r.flag)),a+=String(i).toUpperCase();else if("u"===r.conversion)a+=Number.parseInt(String(i),10)>>>0;else{if("x"!==r.conversion)throw new Error("Unknown format specifier.");i=(Number.parseInt(String(i),10)>>>0).toString(16),null!==r.width&&(i=t(String(i),r.width,r.flag)),a+=i}}return a}}},474:(e,o,t)=>{t(430).createPrintf()},868:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.tokenize=void 0;const t=/(?:%(?<flag>([+0-]|-\+))?(?<width>\d+)?(?<position>\d+\$)?(?<precision>\.\d+)?(?<conversion>[%BCESb-iosux]))|(\\%)/g;o.tokenize=e=>{let o;const n=[];let r=0,i=0,l=null;for(;null!==(o=t.exec(e));){o.index>i&&(l={literal:e.slice(i,o.index),type:"literal"},n.push(l));const t=o[0];i=o.index+t.length,"\\%"===t||"%%"===t?l&&"literal"===l.type?l.literal+="%":(l={literal:"%",type:"literal"},n.push(l)):o.groups&&(l={conversion:o.groups.conversion,flag:o.groups.flag||null,placeholder:t,position:o.groups.position?Number.parseInt(o.groups.position,10)-1:r++,precision:o.groups.precision?Number.parseInt(o.groups.precision.slice(1),10):null,type:"placeholder",width:o.groups.width?Number.parseInt(o.groups.width,10):null},n.push(l))}return i<=e.length-1&&(l&&"literal"===l.type?l.literal+=e.slice(i):n.push({literal:e.slice(i),type:"literal"})),n}}},o={};const t=new Proxy({resource:GetCurrentResourceName()},{get(e,o){const t=o?e[o]:e;return void 0!==t?t:(AddEventHandler(`ox_lib:cache:${o}`,(t=>{e[o]=t})),e[o]=exports.ox_lib.cache(o)||!1,e[o])}});!function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}(474);const n={};function r(e,o,t){for(const n in e){const i=t?`${t}.${n}`:n,l=e[n];"object"==typeof l?r(l,o,i):o[i]=String(l)}return o}function i(e){const o=LoadResourceFile(t.resource,`locales/${e}.json`);return o||console.warn(`could not load 'locales/${e}.json'`),JSON.parse(o)||{}}(e=>{const o=exports.ox_lib.getLocaleKey();let t=i("en");"en"!==o&&Object.assign(t,i(o));const l=r(t,{});for(let[e,o]of Object.entries(l)){if("string"==typeof o){const e=new RegExp(/\$\{([^}]+)\}/g),t=o.match(e);if(t)for(const e of t){if(!e)break;let t=l[e.substring(2,e.length-1)];t&&(o=o.replace(e,t))}}n[e]=o}})(),t.playerId=PlayerId(),t.serverId=GetPlayerServerId(t.playerId);const l={};GetConvarInt("ox:callbackTimeout",6e4),onNet(`__ox_cb_${t.resource}`,((e,...o)=>{const t=l[e];return delete l[e],t&&t(...o)})),RegisterCommand("+oo",(async()=>{const e=await(async(e,o)=>await exports.ox_lib.alertDialog({header:"Hello there",content:"General Kenobi  \n Markdown support!",centered:!0,cancel:!0},void 0))();exports.qb,menu.openMenu([{header:"< Go Back"},{header:"Number: ",txt:"Other",params:{event:"qb-menu:client:testButton",args:{message:"This was called by clicking this button"}}}]),console.log("nihao,did qbcore worked? "),console.log(e)}),!1),RegisterKeyMapping("+oo","第一个keybind","keyboard","o")})();