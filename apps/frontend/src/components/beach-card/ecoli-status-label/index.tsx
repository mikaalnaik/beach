import { Beach } from 'src/types/beaches';
import styles from './style.module.scss';

interface Props {
  beach: Beach;
}

const EcoliStatusLabel = ({ beach }: Props) => {
  const { eColi } = beach;

  const label = eColi ? `${eColi} E. coli` : 'Not Tested';

  return (
    <section className={styles.component}>
      {label}
    </section>
  );
};

export default EcoliStatusLabel;
