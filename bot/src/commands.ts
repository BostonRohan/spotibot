import {
  ChatInputApplicationCommandData,
  Client,
  ChatInputCommandInteraction,
} from "discord.js";
import { CurrentlyPlaying } from "./commands/currentlyPlaying";
import { Help } from "./commands/help";
import { Queue } from "./commands/queue";
import { RecentlyPlayed } from "./commands/recentlyPlayed";
import { Start } from "./commands/start";
import { TopArtists } from "./commands/topArtists";
import { TopTracks } from "./commands/topTracks";

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: ChatInputCommandInteraction) => void;
}

export const Commands: Command[] = [
  Help,
  Start,
  TopArtists,
  TopTracks,
  CurrentlyPlaying,
  Queue,
  RecentlyPlayed,
];
