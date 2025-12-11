// import { leveledUp } from "./eventsFolder/leveledUp";
// import { ecoBrunch } from "./eventsFolder/ecoBrunch";
import { bcomMixer } from "./eventsFolder/bcomMixer";

export const eventIndex = [
    // leveledUp,
    // ecoBrunch,
    bcomMixer,
].sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime());