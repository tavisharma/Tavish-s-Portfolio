import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

let AboutContent = (props) => {
    let [content, setContent] = useState('');
    let [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('yes');
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

    return (
        <p>
            { content }
        </p>
    )
}

let TypingEffectDiv = (props) => {
    return (
        <div className='body-about-div-child'>
            <AboutContent text={props.text.slice(props.indexStart, props.indexEnd)} />
            <div className='mouse-div'>
            </div>
        </div>  
    );
}

let AboutSection = (props) => {

    const [firstTypingComplete, setFirstTypingComplete] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setFirstTypingComplete(true);
        }, 1500);
        return () => clearTimeout(timeoutId);
    }, [props.text]);

    return (
        <div className='body-about-div'>
            <TypingEffectDiv text={props.text} indexStart={0} indexEnd={15} />
            {firstTypingComplete &&
                (<TypingEffectDiv text={props.text} indexStart={15} indexEnd={33} />)
            }
        </div>
    );
}

export default AboutSection;