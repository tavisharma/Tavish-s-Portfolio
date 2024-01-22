import React from "react";
import { motion, spring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import MyImage from '../resources/166F3403-C4B5-45C2-B0A9-BFDE57A75C6E_1_105_c.jpeg'

const boxVariant = {
    visible : {scale: 1, transition: { duration: 0.5 }, opacity: 1,},
    hidden: { opacity: 0, scale: 0}
}


let AboutInfoSection = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY >= 650) {
            if (scrollY >= 650 && scrollY <= 750) {
                const opacity = 1; // Adjust the divisor for the desired effect
                control.start({ opacity });
            } else {
                const opacity = 2 - scrollY / 650; // Adjust the divisor for the desired effect
                control.start({ opacity });
            }
          } else {
            const opacity = 0;
            control.start({ opacity });
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [control]);

    useEffect(() => {
        if (inView) {
          control.start('visible');
          control.set({transition: spring})
        } else {
          control.start('hidden');
        }
    }, [control, inView]);

    return (<>
        <motion.div 
            className="info-section-div"
            ref={ref}
            variants={boxVariant}
            initial='hidden'
            animate={control}
        >
            <div>
                <li> <p>ABOUT</p></li>
            </div>
            <div className="info-inner-div-main" >
                <div className="info-inner-div">
                </div>
                <div className="info-inner-div1">
                    <img src={MyImage} alt="tavish" className="my-image"></img>
                </div>
            </div>
            
        </motion.div>
    </>);
}

export default AboutInfoSection;