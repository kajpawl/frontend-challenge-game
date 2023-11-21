import { Fragment } from 'react';
import clsx from 'clsx';
import TalentButton from '../TalentButton/TalentButton';
import { TalentsPath } from '../../types';
import styles from './Path.module.scss';

interface TalentsPathProps {
  pathData: TalentsPath;
  pathIndex: number;
  onTalentActivate: (pathIndex: number, talentIndex: number) => void;
  onTalentDeactivate: (pathIndex: number, talentIndex: number) => void;
}

const Path = ({
  pathData,
  pathIndex,
  onTalentActivate,
  onTalentDeactivate,
}: TalentsPathProps) => (
  <div className={styles.path}>
    <h2 className={styles.name}>{pathData.name}</h2>
    <div className={styles.row}>
      {pathData.items.map((talent, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <div
              className={clsx(
                styles.connector,
                talent.isActive && styles.active
              )}
            />
          )}
          <TalentButton
            isActive={talent.isActive}
            onActivate={() => onTalentActivate(pathIndex, index)}
            onDeactivate={() => onTalentDeactivate(pathIndex, index)}
            spriteIndex={talent.spriteIndex}
          />
        </Fragment>
      ))}
    </div>
  </div>
);

export default Path;

