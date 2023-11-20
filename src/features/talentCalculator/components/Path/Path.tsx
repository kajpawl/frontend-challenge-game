import { Fragment } from 'react';
import clsx from 'clsx';
import TalentButton from '../TalentButton/TalentButton';
import { TalentsPath } from '../../types';
import styles from './Path.module.scss';

interface TalentsPathProps {
  pathData: TalentsPath;
  onTalentActivate: (pathId: string, index: number) => void;
  onTalentDeactivate: (pathId: string, index: number) => void;
}

const Path = ({
  pathData,
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
            onActivate={() => onTalentActivate(pathData.id, index)}
            onDeactivate={() => onTalentDeactivate(pathData.id, index)}
            spriteIndex={talent.spriteIndex}
          />
        </Fragment>
      ))}
    </div>
  </div>
);

export default Path;

