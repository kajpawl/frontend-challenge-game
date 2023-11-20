import { useReducer } from 'react';
import { TalentAction, TalentPathsAction, TalentsPathsState } from '../../types';
import { MAX_TALENT_POINTS } from '../../constants';
import { initialTalentsState } from '../../data';

const reduceTalentActivate = (
  state: TalentsPathsState,
  { pathId, talentIndex }: TalentPathsAction
) => {
  if (state.talentPointsSpent >= MAX_TALENT_POINTS) return state;

  const pathIndex = state.paths.findIndex((path) => path.id === pathId);
  const pathTalents = state.paths[pathIndex].items;

  if (pathTalents[talentIndex].isActive) return state;
  if (talentIndex > 0 && pathTalents[talentIndex - 1].isActive === false)
    return state;

  const newState = structuredClone(state);
  newState.paths[pathIndex].items[talentIndex].isActive = true;
  newState.talentPointsSpent++;

  return newState;
};

const reduceTalentDeactivate = (
  state: TalentsPathsState,
  { pathId, talentIndex }: TalentPathsAction
) => {
  const pathIndex = state.paths.findIndex((path) => path.id === pathId);
  const pathTalents = state.paths[pathIndex].items;

  if (!pathTalents[talentIndex].isActive) return state;
  if (
    talentIndex !== pathTalents.length - 1 &&
    pathTalents[talentIndex + 1].isActive === true
  )
    return state;

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
      return reduceTalentActivate(state, action);
    case TalentAction.Dectivate:
      return reduceTalentDeactivate(state, action);
    default:
      return state;
  }
};

export const useTalentCalculatorState = () => {
  const [state, dispatch] = useReducer(talentsReducer, initialTalentsState);

  const handleTalentActivate = (pathId: string, talentIndex: number) =>
    dispatch({ type: TalentAction.Activate, pathId, talentIndex });

  const handleTalentDeactivate = (pathId: string, talentIndex: number) =>
    dispatch({ type: TalentAction.Dectivate, pathId, talentIndex });

  return { state, handleTalentActivate, handleTalentDeactivate };
};

