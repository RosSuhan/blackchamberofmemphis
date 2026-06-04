import { leveledUp } from "./eventsFolder/leveledUp";
import { bcomMixer } from "./eventsFolder/bcomMixer";
import { janBcomNewMember } from './eventsFolder/janBcomNewMember';
import { febBcomNewMember } from './eventsFolder/febBcomNewMember';
import { mrtBcomNewMember } from "./eventsFolder/mrtBcomNewMember";
import { leveledUp2 } from "./eventsFolder/leveledUp2";
import { leveledUp3 } from "./eventsFolder/leveledUp3";
import { leveledUp4 } from "./eventsFolder/leveledUp4";
import { succSolFeb } from "./eventsFolder/succSolFeb";
import { theStudioKaraokeRibbonCut } from "./eventsFolder/theStudioKaraokeRibbonCut";
import { firstQuarterlyNetwork } from "./eventsFolder/firstQuarterlyNetwork";
import { aprilBcomNewMember } from "./eventsFolder/aprilBcomNewMember";
import { remotingWorkshop1 } from "./eventsFolder/remotingWorkshop1";
import { mayBcomNewMember } from "./eventsFolder/mayBcomNewMember";
import { boominToBank } from "./eventsFolder/boominToBank";
import { boominMarketing } from "./eventsFolder/boominMarketing";
import { boominFundU } from "./eventsFolder/boominFundU";
import { bcomRedBirdMixer } from './eventsFolder/bcomRedBirdMixer';
import { econEmpowerment } from "./eventsFolder/econEmpowerment";

export const eventIndex = [
    econEmpowerment,
    bcomRedBirdMixer,
    boominFundU,
    boominMarketing,
    boominToBank,
    mayBcomNewMember,
    remotingWorkshop1,
    leveledUp,
    bcomMixer,
    janBcomNewMember,
    febBcomNewMember,
    mrtBcomNewMember,
    leveledUp2,
    leveledUp3,
    leveledUp4,
    succSolFeb,
    theStudioKaraokeRibbonCut,
    firstQuarterlyNetwork,
    aprilBcomNewMember,
].sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime());