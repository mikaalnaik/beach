import styles from './style.module.scss';
import { ParticlesAnimation } from '../beach-card/particle';
import BeachStandardInfoSection from './beach-standard-info-section';

export type TBeachStandard = {
  name: string;
  eColi: number;
}

interface Props {
  standard: TBeachStandard
}

const BeachStandard = ({ standard }: Props) => {
  const { eColi } = standard;


  return (
    <div className={styles['beachcard']}>
      <div className={styles['image-wrapper']}>
        <ParticlesAnimation ecoli={eColi} />
      </div>
      <BeachStandardInfoSection standard={standard}  />
    </div>
  );
};

export default BeachStandard;
