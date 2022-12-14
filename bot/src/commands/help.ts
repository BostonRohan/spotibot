import { Client, ChatInputCommandInteraction } from "discord.js";
import { Command } from "../commands";

export const Help: Command = {
  name: "help",
  description: "need help?",
  run: async (client: Client, interaction: ChatInputCommandInteraction) => {
    const content =
      "Built by: *Boston Rohan* \n For commands list: `/commands` \n [Need help connecting your spotify account to discord?](https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection) \n Need additional help? Contact me at: `Boss#3167`";

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
