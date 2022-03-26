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

  return (
    <div className={styles['beachcard-content']}>
      <section className={styles.row}>
        <BeachStatus eColi={beach.eColi} />
        <div className={styles.title}>
          {beachDisplayName}
        </div>
      </section>
      <EcoliStatusLabel beach={beach} />
      <div className={styles['collection-date']}>
        {dayjs(collectionDate).fromNow()}
      </div>
    </div>
  );
};

export default BeachInfoSection;
