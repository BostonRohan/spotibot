import { ChatInputCommandInteraction } from "discord.js";

export default async (interaction: ChatInputCommandInteraction) => {
  return await interaction.followUp({
    ephemeral: true,
    content: "there was an error running this command, please try again.",
  });
};
