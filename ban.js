
//a simple ban command
// Requires a role called "staff" to work

module.exports = {
    name: 'ban',
    description: "this bans members",
     
     execute(message, args) {
       // var fname = message.mentions.users.first().username;
    const role = (message.member.roles.cache.some(r => r.name === "Staff"))
    
   /*if they are not a staff it doesnt let them use this command*/ 
    if (!role) message.reply('you cant use this cmd!')
            
       if (message.member.roles.cache.some(r => r.name === "Staff")){
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send( "  has been naughty and was banned!");
            }else{
                message.channel.send('pls @ a member!');
        
            }

        }

        

    }
}
