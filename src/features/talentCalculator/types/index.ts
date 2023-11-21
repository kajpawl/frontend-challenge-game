export interface Talent {
  spriteIndex: number;
  isActive: boolean;
}

export interface TalentsPath {
  name: string;
  items: Talent[];
}

export interface TalentsPathsState {
  paths: TalentsPath[];
  talentPointsSpent: number;
}

export enum TalentAction {
  Activate = 'ACTIVATE',
  Dectivate = 'DEACTIVATE',
}

export interface TalentPathsAction {
  type: TalentAction;
  pathIndex: number;
  talentIndex: number;
}