import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './style.module.scss';
import { TBeachStandard } from '..';

dayjs.extend(relativeTime);

interface Props {
  standard: TBeachStandard;
}

const BeachStandardInfoSection = ({ standard }: Props) => {

  return (
    <div className={styles['beachcard-content']}>
      <section className={styles.row}>
        <div className={styles.title}>
          {standard.name}
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.readings}>
          {standard.eColi} e.coli/100ml
        </div>
      </section>
    </div>
  );
};

export default BeachStandardInfoSection;
