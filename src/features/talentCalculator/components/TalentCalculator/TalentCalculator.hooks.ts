import { useReducer } from 'react';
import { MAX_TALENT_POINTS } from '../../constants';
import { initialTalentsState } from '../../data';
import {
  TalentAction,
  TalentPathsAction,
  TalentsPathsState,
} from '../../types';

const reduceTalentActivate = (
  state: TalentsPathsState,
  { pathIndex, talentIndex }: TalentPathsAction
) => {
  if (state.talentPointsSpent >= MAX_TALENT_POINTS) return;
  const pathTalents = state.paths[pathIndex].items;

  if (pathTalents[talentIndex].isActive) return;

  const isPreviousItemInactive =
    talentIndex > 0 && pathTalents[talentIndex - 1].isActive === false;
  if (isPreviousItemInactive) return;

  const newState = structuredClone(state);
  newState.paths[pathIndex].items[talentIndex].isActive = true;
  newState.talentPointsSpent++;

  return newState;
};

const reduceTalentDeactivate = (
  state: TalentsPathsState,
  { pathIndex, talentIndex }: TalentPathsAction
) => {
  const pathTalents = state.paths[pathIndex].items;
  if (!pathTalents[talentIndex].isActive) return;

  const isNextItemActive =
    talentIndex !== pathTalents.length - 1 &&
    pathTalents[talentIndex + 1].isActive === true;
  if (isNextItemActive) return;

  const newState = structuredClone(state);
  newState.paths[pathIndex].items[talentIndex].isActive = false;
  newState.talentPointsSpent--;

  return newState;
};

const talentsReducer = (
  state: TalentsPathsState,
  action: TalentPathsAction
) => {
  switch (action.type) {
    case TalentAction.Activate:
      return reduceTalentActivate(state, action) ?? state;
    case TalentAction.Dectivate:
      return reduceTalentDeactivate(state, action) ?? state;
    default:
      return state;
  }
};

export const useTalentCalculatorState = () => {
  const [state, dispatch] = useReducer(talentsReducer, initialTalentsState);

  const handleTalentActivate = (pathIndex: number, talentIndex: number) =>
    dispatch({ type: TalentAction.Activate, pathIndex, talentIndex });

  const handleTalentDeactivate = (pathIndex: number, talentIndex: number) =>
    dispatch({ type: TalentAction.Dectivate, pathIndex, talentIndex });

  return { state, handleTalentActivate, handleTalentDeactivate };
};

