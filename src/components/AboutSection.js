import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

let AboutContent = (props) => {
  let [content, setContent] = useState('');
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (content !== props.text) {
      const typingEffect = () => {
        if (count < props.text.length) {
          setContent((prevContent) => prevContent + props.text.charAt(count));
          setCount((prevCount) => prevCount + 1);
        }
      };
      const timeoutId = setTimeout(typingEffect, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [content, count, props.text]);

  return <p>{content}</p>;
};

let TypingEffectDiv = (props) => {
  return (
    <div className='body-about-div-child'>
      <AboutContent text={props.text.slice(props.indexStart, props.indexEnd)} />
    </div>
  );
};

let AboutSection = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 650; // Adjust the divisor for the desired effect
      control.start({ opacity });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [control]);

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <>
        <motion.div
        className='body-about-div'
        ref={ref}
        variants={boxVariant}
        initial='hidden'
        animate={control}
        >
            <TypingEffectDiv text={props.text} indexStart={0} indexEnd={70} />
        </motion.div>
    </>
  );
};

export default AboutSection;
