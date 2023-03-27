import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-max pt-28 md:pt-0 md:h-screen pb-28 md:pb-0 bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hey!! I'm Danishkar, nice to meet you. Please feel free to connect 😎</p>
            </div>
            <div>
              <p>I am a creative Full-Stack Developer. I am a highly coordinated, 
                committed and diplomatic software engineer with a defined capacity to 
                operate and execute any specific role on schedule.</p>
              <p className='mt-2'>I am able to communicate with a vast variety of individuals easily, 
                with outstanding organizational skills. I see that I will bring my 
                skills and expertise into practice in a full-time role in the industry, 
                which will directly support the activities of the businesses I am 
                involved in.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
