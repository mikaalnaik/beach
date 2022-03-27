// import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { beachPositions } from 'src/utils/beachPositions';
import styles from './style.module.scss';
import EcoliStatusLabel from '../ecoli-status-label';
import BeachStatus from '../beach-status';

dayjs.extend(relativeTime);

interface Props {
  beach: Beach;
}

const BeachInfoSection = ({ beach }: Props) => {
  const {  collectionDate, beachId } = beach;
  const beachDisplayName = beachPositions(beachId).displayName;
  const sourceName = beach.beachId === 12 ? 'Swim Drink Fish' : 'City of Toronto';
  const prediction = undefined;

  return (
    <div className={styles['beachcard-content']}>
      <section className={styles.row}>
        <BeachStatus eColi={beach.eColi} />
        <div className={styles.title}>
          {beachDisplayName}
        </div>
      </section>
      <div className={styles.readings}>
        <section className={styles['stat-row']}>
          <EcoliStatusLabel eColi={beach.eColi} />
          <div>
            <div className={styles.source}>
              {sourceName}
            </div>
            <div className={styles['collection-date']}>
              {dayjs(collectionDate).fromNow()}
            </div>
          </div>
        </section>
        {prediction && (
          <section className={styles['stat-row']}>
            <EcoliStatusLabel eColi={prediction} />
            <div>
              <div className={styles.source}>
              Our Prediction
              </div>
              <div className={styles['collection-date']}>
              for <b>today</b>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BeachInfoSection;
