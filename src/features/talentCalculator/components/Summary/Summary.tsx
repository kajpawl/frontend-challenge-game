import { MAX_TALENT_POINTS } from '../../constants';
import styles from './Summary.module.scss';

interface SummaryProps {
  pointsSpent: number;
}

const Summary = ({ pointsSpent }: SummaryProps) => (
  <div className={styles.pointsSummary}>
    <div>
      {pointsSpent} / {MAX_TALENT_POINTS}
    </div>
    <div className={styles.subtitle}>Points spent</div>
  </div>
);

export default Summary;

