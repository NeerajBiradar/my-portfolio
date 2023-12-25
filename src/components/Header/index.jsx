'use client';
import styles from './style.module.scss';
import Magnetic from '../../common/Magnetic';

export default function Index() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.neeraj}>Neeraj</p>
                        <p className={styles.biradar}>Biradar</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <button className={styles.button} onClick={() => scrollToSection('about')}>About</button>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <button className={styles.button} onClick={() => scrollToSection('work')}>Work</button>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <button className={styles.button} onClick={() => scrollToSection('Contact')}>Contact</button>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
        </>
    )
}
