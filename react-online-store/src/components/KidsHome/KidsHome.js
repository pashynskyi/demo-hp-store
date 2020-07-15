import React from 'react';
import styles from './KidsHome.module.css';
import PortalList from '../PortalList/PortalList';

const KidsHome = (props) => {
    return (
        <section>
            <div className={styles.portalWrapper}>
                <PortalList />
            </div>
            <h2>Soon(kids-home)</h2>
        </section>
    );
}

export default KidsHome;