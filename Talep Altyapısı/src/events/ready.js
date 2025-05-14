import Config from "../config.js";

export default (Bot) => { //BURALARA DOKUNMAYINIZ. -CRAXSHOP
  Bot.on("ready", () => {
    Bot.user.setActivity(Config.ACTIVITY.NAME, {
      type: Config.ACTIVITY.TYPE,
    });
  });
};
