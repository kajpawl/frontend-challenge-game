import clsx from 'clsx';
import styles from './TalentButton.module.scss';

interface TalentButtonProps {
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  spriteIndex: number;
}

const TalentButton = ({
  isActive,
  onActivate,
  onDeactivate,
  spriteIndex,
}: TalentButtonProps) => {
  const backgroundPositionX = `-${spriteIndex * Number(styles.iconWidth)}px`;

  return (
    <button
      className={clsx(styles.item, isActive && styles.active)}
      onClick={onActivate}
      onContextMenu={onDeactivate}
    >
      <div className={styles.icon} style={{ backgroundPositionX }} />
    </button>
  );
};

export default TalentButton;
