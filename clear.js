// clear command. Clear a amount of messages of your choose


module.exports = {
    name: 'clear',
    description: "clears messages",
    async execute(message, args) {
        if(message.member.permissions.has("ADMINISTRATOR")){
        if (!args[0]) return message.reply("please enter the amount of messages that you want to clear");
        if (isNaN(args[0])) return message.reply("please enter a valid number");
     
        if (args[0] > 40) return message.reply("pleas please choose a number below 40!");
        if (args[0] < 1) return message.reply("please pick a number greater than 0");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
     
    
    
    
    });
  
}
else return message.channel.send("you cannot do that!")
}   

}


