fx_version 'cerulean'
game 'gta5'
lua54 'yes'
description '第一个使用js的开发，还有webpack'
author  'unky,unkyzh,sunskyzhao,5unkyzh1,1489259653'
client_script {
    'client.js',
    'js/dist/index.js'
}

server_script {
    'server.js'
}

ui_page 'html/index.html'
files {'html/index.html',
} 
shared_script {
    '@ox_lib/init.lua',
    'config.json'
}

