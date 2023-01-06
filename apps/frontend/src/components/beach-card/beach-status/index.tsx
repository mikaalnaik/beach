import React from 'react';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';

interface Props {
  eColi: Beach['eColi'];
  statusFlag: Beach['statusFlag'];
}

const BeachStatus = ({ eColi, statusFlag }: Props) => {
  const getStatusColour = () => {
    let style = `${styles.status}`;
    if (!eColi) {
      return style;
    } else if (eColi >= 100 || statusFlag === 'UNSAFE') {
      style = `${style} ${styles['status-red']}`;
    } else if (eColi < 100) {
      style = `${style} ${styles['status-green']}`;
    }
    return style;
  };

  return <span className={`${getStatusColour()}`} />;
};

export default BeachStatus;
