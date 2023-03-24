// import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';
import { beachIDToName } from 'src/utils/beachRouteMatch';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface Props {
  beach: Beach;
}

const BeachCard = ({ beach }: Props) => {
  const { eColi, prediction } = beach;
  // const router = useRouter();

  const handleClick = () => {
    // Create specific page for Ontario Place beach
    // if (beach.beachId === 12) {
    //   return;
    // } else {
    //   router.push(`/beach/${getBeachConstants(beach.beachId).routeName}`);
    // }
  };

  const label = eColi ? eColi : 'N/A'

  const getColorFlag = (value: number): 'safe' | 'unsafe' => {
    if (value < 100) {
      return 'safe'
    } else {
      return 'unsafe'
    }

  }


  return (
    <div className={styles['beachcard']} onClick={handleClick}>
      <span className={styles.beachName}>
        {beachIDToName(beach?.beachId)}
      </span>
      <section className={styles.readingGroup}>
        {beach.prediction && (
          <span className={styles.result}>
            <div className={`${styles.reading} ${styles[getColorFlag(prediction)]}`}>
              {prediction}
            </div>
            <span className={styles.superScript}>
              <div className={styles.unit}>
                E. coli ppm
              </div>
              <div className={`${styles.time}`}>
                Predicted today
              </div>
            </span>
          </span>
        )}


        <span className={styles.result}>
          <div className={`${styles.reading} ${styles[getColorFlag(eColi)]}`}>
            {label}
          </div>
          <span className={styles.superScript}>
            <div className={styles.unit}>
              E. coli ppm
            </div>
            <div className={`${styles.time}`}>
              {dayjs(beach.collectionDate).fromNow()}
            </div>
          </span>
        </span>
      </section>
    </div>
  );
};

export default BeachCard;
