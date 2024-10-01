import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='bg-emerald-600 border-r-2 border-cyan-300 rounded-2xl shadow-lg animate-breathe'>
        <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5'>
          Hi, I'm
          <span className='font-semibold mx-2 text-white'>Jorge</span>
          👋
          <br />A IT Engineer from Ecuador 🇪🇨 graduated from{" "}
          <a
            href='https://www.epn.edu.ec/'
            target='_blank'
            className='text-gray-50 font-bold'
          >
            Escuela Politécnica Nacional
          </a>
        </h1>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='animate-breathe'>
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Worked with many companies <br /> and picked up many skills along
            the way
          </p>

          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Learn more
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='animate-breathe'>
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Led multiple projects to success over the years. <br /> Curious
            about the impact?
          </p>

          <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Visit my portfolio
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='animate-breathe'>
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Need a project done or looking for a dev? <br /> I'm just a few
            keystrokes away
          </p>

          <Link to='/contact' className='neo-brutalism-white neo-btn'>
            Let's talk
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
