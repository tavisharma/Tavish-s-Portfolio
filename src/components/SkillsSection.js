import React from 'react'
import { IconContext } from "react-icons";
import { DiJava } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
//import { SiSpring } from "react-icons/si";
//import { SiReact } from "react-icons/si";

function LanguageIcon(props) {
    if (props.name === 'java') {
        return (
            <>
                <IconContext.Provider value={{ color: props.color, className: "language-icon-java", size: '100px' }}>
                    <div>
                        <DiJava />
                    </div>
                </IconContext.Provider>
            </>
        );
    } else if (props.name === 'python') {
        return (
            <>
                <IconContext.Provider value={{ color: props.color, className: "language-icon-python", size: '100px' }}>
                    <div>
                        <DiPython />
                    </div>
                </IconContext.Provider>
            </>
        );
    } else if (props.name === 'js') {
        return (
            <>
                <IconContext.Provider value={{ color: props.color, className: "language-icon-js", size: '100px' }}>
                    <div>
                        <DiJavascript1 />
                    </div>
                </IconContext.Provider>
            </>
        );
    } else if (props.name === 'cpp') {
        return (
            <>
                <IconContext.Provider value={{ color: props.color, className: "language-icon-cpp", size: '100px' }}>
                    <div>
                        <SiCplusplus />
                    </div>
                </IconContext.Provider>
            </>
        );
    } else if (props.name === 'c') {
        return (
            <>
                <IconContext.Provider value={{ color: props.color, className: "language-icon-c", size: '100px' }}>
                    <div>
                        <SiCoursera />
                    </div>
                </IconContext.Provider>
            </>
        );
    }
}

function Languages() {
    return (
        <>
            <div className='languages-sub-section'>
                <LanguageIcon color = 'white' name='java' />
                <LanguageIcon color = 'white' name='js' />
                <LanguageIcon color = 'white' name='python' />
                <LanguageIcon color = 'white' name='cpp' />
                <LanguageIcon color = 'white' name='c' />
            </div>
            <div className='languages-sub-section'>
                
            </div>
            <div className='languages-sub-section'>
            </div>
        </>
    );
}

function SkillsSection() {

    return (
        <div className='skills-section'>
            <div className='skills-section-header'>
                <p>TECHNICAL SKILLS</p>
            </div>
            <div className='skills-section-innerdiv'>
                <Languages></Languages>
            </div>
        </div>
    );
}

export default SkillsSection;