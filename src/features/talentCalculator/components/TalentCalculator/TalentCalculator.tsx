import { useTalentCalculatorState } from './TalentCalculator.hooks';
import Path from '../Path/Path';
import Summary from '../Summary/Summary';
import styles from './TalentCalculator.module.scss';

const TalentCalculator = () => {
  const { state, handleTalentActivate, handleTalentDeactivate } =
    useTalentCalculatorState();

  return (
    <main className={styles.root} onContextMenu={e => e.preventDefault()}>
      <h1 className={styles.heading}>
        TitanStar Legends - Rune Mastery Loadout Talent Calcualtor 9000
      </h1>
      <main className={styles.treeContainer}>
        <div className={styles.tree}>
          {state.paths.map((path) => (
            <Path
              key={path.id}
              pathData={path}
              onTalentActivate={handleTalentActivate}
              onTalentDeactivate={handleTalentDeactivate}
            />
          ))}
        </div>
        <Summary pointsSpent={state.talentPointsSpent} />
      </main>
    </main>
  );
};

export default TalentCalculator;

