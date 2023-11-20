import styles from './TalentButton.module.scss';
import clsx from 'clsx';

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
  const backgroundPositionX = `-${spriteIndex * Number(styles.iconWidth)}px`

  return (
    <button
      className={clsx(styles.item, isActive && styles.active)}
      onClick={onActivate}
      onContextMenu={(e) => { e.preventDefault(); onDeactivate() }}
    >
      <div className={styles.icon} style={{ backgroundPositionX }} />
    </button>
  )
};

export default TalentButton;
