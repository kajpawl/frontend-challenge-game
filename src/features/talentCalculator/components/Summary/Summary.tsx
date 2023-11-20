import clsx from 'clsx';
import { MAX_TALENT_POINTS } from '../../constants';
import styles from './Summary.module.scss';

interface SummaryProps {
  className?: string;
  pointsSpent: number;
}

const Summary = ({ className, pointsSpent }: SummaryProps) => (
  <div className={clsx(styles.pointsSummary, className)}>
    <div>
      {pointsSpent} / {MAX_TALENT_POINTS}
    </div>
    <div className={styles.subtitle}>Points spent</div>
  </div>
);

export default Summary;

