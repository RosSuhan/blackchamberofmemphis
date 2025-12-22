import { leveledUp } from "./eventsFolder/leveledUp";
import { bcomMixer } from "./eventsFolder/bcomMixer";
import { janBcomNewMember } from './eventsFolder/janBcomNewMember';
import { febBcomNewMember } from './eventsFolder/febBcomNewMember'

export const eventIndex = [
    leveledUp,
    bcomMixer,
    janBcomNewMember,
    febBcomNewMember
].sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime());