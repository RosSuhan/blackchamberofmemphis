import { leveledUp } from "./eventsFolder/leveledUp";
import { bcomMixer } from "./eventsFolder/bcomMixer";
import { janBcomNewMember } from './eventsFolder/janBcomNewMember';
import { febBcomNewMember } from './eventsFolder/febBcomNewMember'
import { leveledUp2 } from "./eventsFolder/leveledUp2";
import { leveledUp3 } from "./eventsFolder/leveledUp3";
import { leveledUp4 } from "./eventsFolder/leveledUp4";

export const eventIndex = [
    leveledUp,
    bcomMixer,
    janBcomNewMember,
    febBcomNewMember,
    leveledUp2,
    leveledUp3,
    leveledUp4,
].sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime());