// import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';
import Particle from './particle';
import BeachInfoSection from './beach-info-section';

interface Props {
  beach: Beach;
}

const BeachCard = ({ beach }: Props) => {
  const { eColi } = beach;
  // const router = useRouter();

  return (
    <div className={styles['beachcard']}>
      <div className={styles['image-wrapper']}>
        <Particle ecoli={eColi} />
      </div>
      <BeachInfoSection beach={beach} />
    </div>
  );
};

export default BeachCard;
