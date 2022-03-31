import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';
import { ParticlesAnimation } from './particle';
import BeachInfoSection from './beach-info-section';
import VisibilitySensor from 'react-visibility-sensor';
import { getBeachConstants } from 'src/utils/beachPositions';
import { useState } from 'react';

interface Props {
  beach: Beach;
}

const BeachCard = ({ beach }: Props) => {
  const { eColi } = beach;
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

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
      <VisibilitySensor
        partialVisibility={true}
        onChange={setIsVisible}
      >
        <div className={styles['image-wrapper']}>
          {isVisible && (
            <ParticlesAnimation ecoli={eColi} />
          )}
        </div>
      </VisibilitySensor>
      <BeachInfoSection beach={beach} />
    </div>
  );
};

export default BeachCard;
