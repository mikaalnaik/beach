// import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import { beachPositions } from '../../utils/beachPositions';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './style.module.scss';
import BeachStatus from './beach-status';
import Particle from './particle';
// import { useRouter } from 'next/router';
// import { beachIDToRouteName } from '../../utils/beachRouteMatch';

dayjs.extend(relativeTime);

interface Props {
  beach: Beach;
}

const BeachCard = ({ beach }: Props) => {
  const { eColi,
    //  collectionDate,
    beachId } = beach;
  const beachDisplayName = beachPositions(beachId).displayName;
  // const router = useRouter();

  const clickBeach = () => {
    // const beachRouteName = beachIDToRouteName(beachId);
    // router.push(`/beach/${beachRouteName}`, `/beach/${beachRouteName}`);
  };

  return (
    <div className={styles['beachcard']} onClick={clickBeach}>
      <div className={styles['image-wrapper']}>
        <Particle ecoli={eColi} />
      </div>
      <div className={styles['beachcard-content']}>
        <div className={styles.title}>
          {beachDisplayName}
        </div>
        <section className={styles.row}>
          <BeachStatus eColi={eColi} />
          <div>
            <div className={styles.ecoli}>
              {eColi && <> {eColi} E. coli </>}
              {!eColi && <> Not Tested </>}
            </div>
          </div>
        </section>
        {/* <section className={styles.row}>
          <div>
            <div className={styles['collection-date']}>
              {dayjs(collectionDate).fromNow()}
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default BeachCard;
