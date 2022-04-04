import { useRouter } from 'next/router';
import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';
import BeachInfoSection from './beach-info-section';
import { getBeachConstants } from 'src/utils/beachPositions';
import Image from 'next/image';

interface Props {
  beach: Beach;
}

const BeachCard = ({ beach }: Props) => {
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
      {/* <VisibilitySensor
        partialVisibility={true}
        onChange={setIsVisible}
      > */}
      {/* <div className={styles['image-wrapper']}> */}
      <Image
        src='/m-rose-cherry-no-text.jpeg'
        objectFit='contain'
        layout='responsive'
        width={90}
        height={106}
      />

      {/* {isVisible && (
            <ParticlesAnimation ecoli={eColi} />
          )} */}
      {/* </div> */}
      {/* </VisibilitySensor> */}
      <BeachInfoSection beach={beach} />
    </div>
  );
};

export default BeachCard;
