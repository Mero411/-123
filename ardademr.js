const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const app = express();

const fs = require("fs");
                              // ArdaDemr Youtube Kanalına emoji ekleme altyapısı
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("DraenseNNN");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
// ArdaDemr Youtube Kanalına emoji ekleme altyapısı
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`ArdaDemr Discord Bot Altyapısı BOT AKTİF`);
});

client.login(process.env.TOKEN);
// ArdaDemr Youtube Kanalına emoji ekleme altyapısı



const db = new require("quick.db");


        client.on("message",async(message)=>{
          if(message.author.bot) return false;
            if(message.channel.type=="dm") return false;
          
            if (message.channel.id !== "860530815325962262" && message.channel.id !== "KANAL ID 2" && message.channel.id !== "KANAL ID 3") return;
          await message.react('<a:tik:862768127115919411>')
          await message.react('<a:carpi:862768168131624971>')
        })

        client.on("message",async(message)=>{
          if(message.author.bot) return false;
            if(message.channel.type=="dm") return false;
          
            if (message.channel.id !== "862787371715788800" && message.channel.id !== "kanalid") return;
          await message.react('👍🏻')
          await message.react('👎🏻')
          await message.react('⭐')
        })
