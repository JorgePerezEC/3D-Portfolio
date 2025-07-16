import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CTA from "../components/CTA";
import { experiences, skills, socialLinks } from "../constants";
import { my_resume } from "../assets/docs";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I'm{" "}
        <span className='purple-gradient_text font-semibold drop-shadow'>
          Jorge Pérez
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Experienced and versatile IT Engineer with a strong focus on mobile
          and web application development. Proven expertise in the MERN stack
          (MongoDB, Express, React, Node.js), Django, Angular, and FastAPI,
          allowing seamless transitions between web and mobile platforms. 
          Adept at building scalable, high-performance applications with a 
          strong emphasis on user experience and modern design principles. 
          Extensive experience in web programming, UX/UI design, and blockchain 
          applications, complemented by a track record of managing complex 
          projects and delivering innovative solutions. Currently contributing 
          to Concreto.ai, a construction sector requisition management system, 
          implementing functional improvements, modernizing architecture with 
          Angular and FastAPI, and providing comprehensive technical support 
          while working under Scrum methodology with Azure DevOps.
        </p>
      </div>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <a href={my_resume} target="_blank" rel="noopener noreferrer">
          <button className='btn rounded-xl'>View Resume</button>
        </a>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Social Links</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={social.iconUrl}
                    alt={social.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>
        <div className='mt-12 flex flex-col gap-5'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{ background: experience.iconBg }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      className='text-black-500/50 font-normal pl-1 text-sm'
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default About;
