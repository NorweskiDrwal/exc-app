import React from 'react';

import styles from './LoginForm.scss';
import main from '../../index.scss';

const loginForm = () => (
    <div className={styles.LoginForm__wrap}>

        <button 
            className={[styles.LoginForm__submit, main.pin, main.circle].join(' ')}
            type="submit">
            Login
        </button>

    </div>
)

export default loginForm;
