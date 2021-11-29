fx_version 'bodacious'
game 'gta5'

author 'Nicks Scripts'

ui_page 'notification/index.html'

client_script {
    'client/main.lua'
}

files{
    'notification/index.html',
    'notification/static/css/*.css',
    'notification/static/js/*.js',
}

exports {
    'sendNotification'
}

client_script "@Badger-Anticheat/acloader.lua"