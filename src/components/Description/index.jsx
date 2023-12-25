import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Index() {

    const phrase = "Hello! I'm Neeraj Biradar, a dynamic and dedicated computer science student at Keshav Memorial Institute of Technology.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <section id='about'>
            <div ref={description} className={styles.description}>
                <div className={styles.body}>
                    <p>
                        {
                            phrase.split(" ").map((word, index) => {
                                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                            })
                        }
                    </p>
                    <div data-scroll data-scroll-speed={0.1}>
                        <Rounded className={styles.button}>
                            <p>About me</p>
                        </Rounded>
                    </div>
                </div>
            </div>
        </section>
    )
}
