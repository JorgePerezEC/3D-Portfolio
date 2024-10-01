import React from "react";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I'm{" "}
        <span className='purple-gradient_text font-semibold drop-shadow'>
          Jorge
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Experienced and versatile IT Engineer with a strong focus on mobile
          and web application development. Proven expertise in the MERN stack
          (MongoDB, Express, React, Node.js), allowing seamless transitions
          between web and mobile platforms. Adept at building scalable,
          high-performance applications with a strong emphasis on user
          experience and modern design principles. Extensive experience in web
          programming, UX/UI design, and blockchain applications, complemented
          by a track record of managing complex projects and delivering
          innovative solutions.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12' />
      </div>
    </section>
  );
};

export default About;
