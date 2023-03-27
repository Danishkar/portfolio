import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-20 bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 pl-[5px]'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-7xl lg:text-6xl font-bold text-[#ccd6f6]'>
          DANISHKAR SIVALINGAM
        </h1>
        <h2 className='text-2xl sm:text-7xl lg:text-6xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Currently, I’m focused on building responsive Full-Stack Web Applications (MERN) and Mobile Applications.
        </p>
        <div>
          <a href="https://drive.google.com/file/d/1IVOwrx2R_iQCopfWMM_LzLoMWZlljqBx/view?usp=sharing" download="Danishkar_Sivalingam_CV" className='text-white w-fit group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Resume
            <span>
              <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
