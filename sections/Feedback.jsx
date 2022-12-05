'use client';

import {motion} from "framer-motion";
import styles from "../styles";
import {fadeIn, staggerContainer, zoomIn} from "../utils/motion";

const Feedback = () => (
    <section
        className={`${styles.paddings} z-10 relative`}
    >
        <motion.div
            variants={staggerContainer}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto lg:flex-row gap-6 flex flex-col`}
        >
            <motion.div
                className={"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"}
                variants={fadeIn('right', 'tween', 0.2, 1)}
            >
                <div className="feedback-gradient"/>
                <div>
                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Samantha</h4>
                    <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder | Metaversus</p>
                </div>
                <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
                    “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
                </p>
            </motion.div>

            <motion.div
                className={"relative flex-1 justify-center items-center flex"}
                variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                <img
                    className={"w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"}
                    alt={"planet-09"}
                    src={"/planet-09.png"}
                />
                <motion.div
                    className={"lg:block hidden absolute -left-[10%] top-[3%]"}
                    variants={zoomIn(0.4, 1)}
                >
                    <img
                        className={"w-[155px] h-[155px] object-contain"}
                        alt={"stamp"}
                        src={"/stamp.png"}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    </section>
);

export default Feedback;
