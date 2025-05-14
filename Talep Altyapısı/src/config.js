import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: ".", //BOTUN PREFIXI İSTERSENİZ DEĞİŞTİREBİLİRSİNİZ. -
  TOKEN: "TOKEN", //BOTUNUZUN TOKENINI GIRIN -
  ACTIVITY: { NAME: "ZWEN SISTEMI", TYPE: "PLAYING" }, //NAME YAZAN KISMI DEĞİŞTİREBİLİRSİNİZ OYNUYOR KISMI -ZWEN
  GUILD_ID: "SUNUCUID", //SUNUCUNUZUN IDSIDIR KOPYALAYIP YAPIŞTIRIN -
  TICKET: {
    CHANNEL: "DESTEKACMAKANALID", //DESTEK TALEBİ AÇMA MESAJININ ATILACAĞI KANAL IDSIDIR -ZWEN
    CATEGORY: "DESTEKKATEGORIID", //AÇILAN DESTEK TALEPLERİNİN BULUNACAĞI KATEGORİ IDSI -ZWEN
    ARCHIVE_CATEGORY: "1168955279300378734", //ARŞİVLENEN-KAPATILAN DESTEK TALEPLERİNİN BULUNACAĞI KATEGORİ IDSI -ZWEN
    MESSAGE: "Talep olustur!", //DESTEK TALEBİ AÇMA MESAJIDIR. EMBED İÇERİSİNDE YAZACAK MESAJ. -ZWEN
    STAFF_ROLES: ["destekrol1","destekrol2"], //DESTEK TALEBINE BAKABİLECEK YETKİLİ ROLLERİ FAZLADAN ID GİREBİLİRSİNİZ. -ZWEN
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Talebi Sahiplen",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Talebi Arsivle",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Talebi Sil",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "talepkonu",
        LABEL: "Talep konusu?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Sikayet, Satin alim, Destek, Diger gibi yazin!",
        REQUIRED: true,
      },
      {
        ID: "sorun",
        LABEL: "Sorun nedir?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Sormak istediginiz soruyu yazin.",
        REQUIRED: true,
      },
    ],
  },
};
