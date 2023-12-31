import { useTalentCalculatorState } from './TalentCalculator.hooks';
import Path from '../Path/Path';
import Summary from '../Summary/Summary';
import styles from './TalentCalculator.module.scss';

const TalentCalculator = () => {
  const { state, handleTalentActivate, handleTalentDeactivate } =
    useTalentCalculatorState();

  return (
    <main className={styles.root} onContextMenu={(e) => e.preventDefault()}>
      <h1 className={styles.heading}>
        TitanStar Legends - Rune Mastery Loadout Talent Calcualtor 9000
      </h1>
      <div className={styles.pathContainer}>
        <div className={styles.pathList}>
          {state.paths.map((path, index) => (
            <Path
              key={path.name + index}
              pathData={path}
              pathIndex={index}
              onTalentActivate={handleTalentActivate}
              onTalentDeactivate={handleTalentDeactivate}
            />
          ))}
        </div>
        <Summary
          className={styles.summaryMargin}
          pointsSpent={state.talentPointsSpent}
        />
      </div>
    </main>
  );
};

export default TalentCalculator;

