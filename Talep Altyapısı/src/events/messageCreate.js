import Utils from "../utils/utils.js";
import Config from "../config.js";
import Discord from "discord.js";
const { ButtonStyle } = Discord;

export default (Bot) => {
  Bot.on("messageCreate", (message) => {
    const Prefix = message.content.toLowerCase().startsWith(Config.PREFIX);

    if (!Prefix && !message.guild) return;

    const Args = message.content.split(" ").slice(1);
    const Command = message.content.split(" ")[0].slice(Config.PREFIX.length);

    if (Command === "ticket") {
      if (!message.member.permissions.has("0x0000000000000008"))
        return message.reply({
          content: "Bu komutu kullanmak için yetkin yok.",
        });

      message.delete().catch(() => {
        return undefined;
      });

      let TicketChannel = message.guild.channels.cache.get(
        Config.TICKET.CHANNEL
      );

      if (!TicketChannel)
        return message.reply({
          content: "Please write ticket channel ID in config file.",
        });

      TicketChannel.send({
        embeds: [Utils.embed(Config.TICKET.MESSAGE, message.guild, Bot, "")],
        components: [
          Utils.button(
            ButtonStyle.Primary,
            "Talep Olustur!",  //BUTONUN ISMIDIR. ÝSTERSENÝZ DEÐÝÞTÝREBÝLÝRSÝNÝZ. -CRAXSHOP
            "ðŸŽ«",  //BUTONUN EMOJISIDIR. DEÐÝÞTÝREBÝLÝRSÝNÝZ. DISCORDUN KENDISINDE BULUNAN EMOJÝLERÝ KULLANIN. -CRAXSHOP
            "ticket",  //BURAYI ELLEME -CRAXSHOP
            false
          ),
        ],
      });

      return message.channel.send(`Destek sistemi basariyla, ${TicketChannel} kanalinda kuruldu.`);
    }
  });
};
