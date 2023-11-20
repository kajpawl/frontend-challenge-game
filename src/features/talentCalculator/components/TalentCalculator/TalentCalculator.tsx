import { Fragment } from 'react';
import { useTalentCalculatorState } from './TalentCalculator.hooks';
import Heading from '../Heading/Heading';
import TalentButton from '../TalentButton/TalentButton';
import { MAX_TALENT_POINTS } from '../../constants';
import styles from './TalentCalculator.module.scss';
import clsx from 'clsx';

const TalentCalculator = () => {
  const { state, handleTalentActivate, handleTalentDeactivate } =
    useTalentCalculatorState();

  return (
    <main className={styles.root}>
      <Heading />
      <main className={styles.treeContainer}>
        <div className={styles.tree}>
          {state.paths.map((path) => (
            <div key={path.id} className={styles.row}>
              <h2 className={styles.pathName}>Talent Path 1</h2>
              <div className={styles.path}>
                {path.items.map((talent, index) => (
                  <TalentButton
                    key={index}
                    isActive={talent.isActive}
                    onActivate={() => handleTalentActivate(path.id, index)}
                    onDeactivate={() => handleTalentDeactivate(path.id, index)}
                    spriteIndex={talent.spriteIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.pointsSummary}>
          <div>
            {state.talentPointsSpent} / {MAX_TALENT_POINTS}
          </div>
          <div className={styles.subtitle}>Points spent</div>
        </div>
      </main>
    </main>
  );
};

export default TalentCalculator;

