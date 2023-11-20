import { TalentsPath, TalentsPathsState } from '../types';

export const initialTalentPaths: TalentsPath[] = [
  {
    id: 'path1',
    name: 'Talent Path 1',
    items: [
      { spriteIndex: 0, isActive: false },
      { spriteIndex: 1, isActive: false },
      { spriteIndex: 2, isActive: false },
      { spriteIndex: 3, isActive: false },
    ],
  },
  {
    id: 'path2',
    name: 'Talent Path 2',
    items: [
      { spriteIndex: 4, isActive: false },
      { spriteIndex: 5, isActive: false },
      { spriteIndex: 6, isActive: false },
      { spriteIndex: 7, isActive: false },
    ],
  },
];

export const initialTalentsState: TalentsPathsState = {
  paths: initialTalentPaths,
  talentPointsSpent: 0,
};
