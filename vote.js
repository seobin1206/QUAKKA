const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('이 명령어는 관리자 권한이 필요합니다.');

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>vote question');

    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Vote Created By ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('⛔');

    message.delete({timeout: 10000});
}