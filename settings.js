const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://ryuu-apii.herokuapp.com',
}

global.APIKeys = {
	'https://ryuu-apii.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'LannOfc' //Ganti Jadi Namamu
global.owner = ['6285803583481','6285729830105'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6285609233482' //Owner Utama Istilahnya
global.namabot = 'BetaBotz MD' //Ganti Jadi Nama Botmu
global.packname = '© BetaBotz' //Sticker Weem
global.author = 'BetaBotz By LannOfc' //Sticker Weem
global.webme = 'https://ryuu-apii.herokuapp.com'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay

//Limit User Ubah Semau Kalian 
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'
    
//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*MAAF KAMU BUKAN ADMIN*',
botAdmin: '*JADIKAN BOT SEBAGAI ADMIN UNTUK MENJALANKAN FITUR INI*',
owner: '*MAAF KAMU BUKAN OWNERKU*',
group: '*MAAF FITUR INI KHUSUS GROUP*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*KHUSUS BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE KAKA🤗*',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
