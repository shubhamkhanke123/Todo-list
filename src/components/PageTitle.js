import React from 'react';
import styles from '../styles/modules/title.module.scss';

function PageTitle({ children, ...rest }) {
  return (
    <div>
      <p className={styles.title} {...rest}>{children}</p>
    </div>
  );
}

export default PageTitle;
