'use client';

import { motion } from "framer-motion";
import {newFeatures, startingFeatures} from "../constants";
import styles from "../styles";
import {fadeIn, planetVariants, staggerContainer} from "../utils/motion";
import {NewFeatures, TitleText, TypingText} from "../components";

const WhatsNew = () => (
    <section
        className={`${styles.paddings} z-10 relative`}
    >
        <motion.div
            variants={staggerContainer}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                className={"flex-[0.75] flex justify-center flex-col"}
                variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                <TypingText title={"| What's New?"}/>
                <TitleText title={<>What's new about Metaversus?</>}/>
                <div className={"mt-[48px] flex flex-wrap justify-between gap-[24px]"}>
                    {newFeatures.map((feature) => (
                        <NewFeatures
                            key={feature.title}
                            {...feature}
                        />
                    ))}
                </div>
            </motion.div>
            <motion.div
                variants={planetVariants('right')}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img
                    src={"/whats-new.png"}
                    alt={"whats-new"}
                    className={"w-[90%] h-[90%] object-contain"}
                />
            </motion.div>
        </motion.div>
    </section>
);

export default WhatsNew;
