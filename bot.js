const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is properly functioning right now.`);
    bot.user.setActivity("with cats, probably");

});


bot.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;






    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    /*if(cmd === `${prefix}red`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Red");
        member.addRole(role);
    }
    if(cmd === `${prefix}orange`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Orange");
        member.addRole(role);
    }
    if(cmd === `${prefix}yellow`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Yellow");
        member.addRole(role);
    }
    if(cmd === `${prefix}green`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Green");
        member.addRole(role);
    }
    if(cmd === `${prefix}blue`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Blue");
        member.addRole(role);
    }
    if(cmd === `${prefix}purple`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Purple");
        member.addRole(role);
    }
    if(cmd === `${prefix}grey`){
        let member = message.member;
        let memberR = message.member.roles;
        member.removeRole(memberR);
        let role = message.guild.roles.find("name", "Grey");
        member.addRole(role);
    }*/



    //says hello back
    if (cmd === `${prefix}hello`){
        return message.channel.send("Hi!");

    }
    //gets info of the server
    if(cmd === `${prefix}serverinfo`){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Info")
        .setThumbnail(sicon)
        .setColor("#310260")
        .addField("Server name", message.guild.name)
        .addField("Server count", message.guild.memberCount);

        return message.channel.send(serverembed);
    }
    //runs quick bot diagnostic
    if (cmd === `${prefix}botdiagnostic`){
        
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot diagnostic")
        .setColor("#310260")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created at", bot.user.createdAt);
    
        return message.channel.send(botembed);
    }
    //reports member
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("No user found");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Player reported")
        .setColor("#310260")
        .addField("Reported user", `${rUser} with ID: ${rUser.id}`)
        .addField("Reason", `${reason}`);

        message.channel.send(reportEmbed);

        return;
    }
    //kicks member
    if(cmd === `${prefix}begone`){
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("No user found");
        let reason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("I don't listen too those of such inferior bloodline.");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("I will never betray the royalty!");

        let kickedEmbed = new Discord.RichEmbed()
        .setDescription("I have dealt my justice.")
        .setColor("#310260")
        .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
        .addField("Kicked By:", `<@${message.author.id}`)
        .addField("Reason", `${reason}`);


        message.channel.send(kickedEmbed);
        message.guild.member(kUser).kick(reason);



    }
    if(cmd === `${prefix}banish`){
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("No user found");
        let reason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("I don't listen too those of such inferior bloodline.");
        if(bUser.hasPermission("KICK_MEMBERS")) return message.channel.send("I will never betray the royalty!");

        let bannedEmbed = new Discord.RichEmbed()
        .setDescription("I have dealt my justice.")
        .setColor("#310260")
        .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
        .addField("Banned By:", `<@${message.author.id}`)
        .addField("Reason", `${reason}`);


        message.channel.send(bannedEmbed);
        message.guild.member(bUser).ban(reason);



    }

    



    //Atlas gives you a high five!
    if(cmd === `${prefix}highfive!`){
        return message.channel.send("*gives high five*");
    }




    });

bot.login(config.token);