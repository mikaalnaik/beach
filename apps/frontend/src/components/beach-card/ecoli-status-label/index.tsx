import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';

interface Props {
  eColi: Beach['eColi'] | undefined
}

const EcoliStatusLabel = ({ eColi }: Props) => {

  const label = eColi ? `${Math.round(eColi)} E. coli` : 'N/A';

  return (
    <section className={styles.component}>
      {label}
    </section>
  );
};

export default EcoliStatusLabel;
