import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  Client,
  ComponentType,
} from "discord.js";
import { Command } from "../commands";
import dotenv from "dotenv";
import loggedIn from "../utils/loggedIn";
import loggedInInteraction from "../utils/loggedInInteraction";
import errorInteraction from "../utils/errorInteraction";

dotenv.config();

export const Start: Command = {
  name: "start",
  description: "start by logging in.",
  run: async (client: Client, interaction: ChatInputCommandInteraction) => {
    const {
      user: { id },
    } = interaction;

    await interaction.deferReply({ ephemeral: true });

    try {
      const {
        data: { name, iconURL, url, error },
      } = await loggedIn(id);

      if (error) {
        const { unauthorized } = error;

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
          new ButtonBuilder()
            .setURL(process.env.DISCORD_AUTH_URL as string)
            .setLabel("Discord")
            .setStyle(ButtonStyle.Link),
          new ButtonBuilder()
            .setCustomId("confirm")
            .setLabel("Confirm")
            .setStyle(ButtonStyle.Success)
        );

        const msg = await interaction.followUp({
          ephemeral: true,
          content:
            unauthorized === "discord"
              ? "click to authorize spotibot with discord, then click confirm when finished. \n **before clicking, make sure your spotify account is connected to your discord.**"
              : "there was an issue authorizing your spotify account. please try again.",
          components: [row],
        });

        msg
          .createMessageComponentCollector({
            componentType: ComponentType.Button,
          })
          .on("collect", async (btn) => {
            await btn.deferUpdate();
            const {
              data: { name, iconURL, url, error },
            } = await loggedIn(id);

            if (error) {
              await interaction.followUp({
                content: "you are not logged in, please try again.",
                ephemeral: true,
              });
            } else {
              await loggedInInteraction(interaction, name, iconURL, url);
            }
          });
      } else {
        await loggedInInteraction(interaction, name, iconURL, url);
      }
    } catch {
      await errorInteraction(interaction);
    }
  },
};
