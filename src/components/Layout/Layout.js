import React, { Fragment } from 'react';

import EntranceContainer from '../../containers/Entrance/EntranceContainer';
import Footer from './Footer/Footer';
import styles from './Layout.scss';

const layout = () => (
  <Fragment>
    <main className={styles.Main__wrap}>
      <EntranceContainer /> 
    </main>
    <Footer />
  </Fragment>
);

export default layout;