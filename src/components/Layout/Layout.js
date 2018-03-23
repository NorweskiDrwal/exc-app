import React, { Fragment } from 'react';

import styles from './Layout.scss';

const layout = (props) => (
  <Fragment>
    <header className={styles.Header__wrap}>Toolbar, SideDrawer, Backdrop</header>
    <main className={styles.Main__wrap}></main>
  </Fragment>
);

export default layout;