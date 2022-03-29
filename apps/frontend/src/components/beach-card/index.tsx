import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';
import { ParticlesAnimation } from './particle';
import BeachInfoSection from './beach-info-section';
import { getBeachConstants } from 'src/utils/beachPositions';

interface Props {
  beach: Beach;
}

const BeachCard = ({ beach }: Props) => {
  const { eColi } = beach;
  const router = useRouter();

  const handleClick = () => {
    // Create specific page for Ontario Place beach
    if (beach.beachId === 12) {
      return;
    } else {
      router.push(`/beach/${getBeachConstants(beach.beachId).routeName}`);
    }
  };

  return (
    <div className={styles['beachcard']} onClick={handleClick}>
      <div className={styles['image-wrapper']}>
        <ParticlesAnimation ecoli={eColi} />
      </div>
      <BeachInfoSection beach={beach} />
    </div>
  );
};

export default BeachCard;
