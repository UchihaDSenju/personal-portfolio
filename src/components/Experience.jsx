import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkOutline, MdStar } from "react-icons/md";

function Experience() {
    return (
        <div id='experience' className='my-9'>
        <h1 className='font-spaceGrotesk text-center text-5xl mb-6'>EXPERIENCE</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(137, 41, 41)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(45, 54, 88)' }}
                    date="May 2022 - Aug 2022"
                    iconStyle={{ background: 'rgb(45, 54, 88)', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Avadi, TamilNadu</h4>
                    <p>
                        HTML, CSS, JavaScript
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(137, 41, 41)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(45, 54, 88)' }}
                    date="Feb 2023 - Aug 2023"
                    iconStyle={{ background: 'rgb(45, 54, 88)', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">React Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Chennai, TamilNadu</h4>
                    <p>
                        Figma, ReactJs, TailwindCSS, TypeScript, API Integration
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: '#333333', color: '#fff' }}
                    icon={<MdStar />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Experience