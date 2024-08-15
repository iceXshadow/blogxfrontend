import React from 'react';

const Spotlight = () => {
  return (
    <section className='w-full min-h-screen flex items-center p-8'>
      <div className='flex flex-col md:flex-col lg:flex-row gap-8 leading-normal transition-all duration-300'>
        <div className='max-w-screen-sm md:w-full lg:w-[42%] h-full rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300'>
          <img src="https://images.unsplash.com/photo-1665592514154-7970e9b7a105?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coffee" />
        </div>
        
        <div className="content font-outfit md:w-full lg:w-[58%] flex flex-col gap-6 text-center md:text-start transition-all duration-300">
          <div className="title text-[2rem] md:text-[4rem] font-semibold text-slate-800 dark:text-[#f6f6f6] transition-all duration-300">
            <h1>A Cozy Gaming Morning: Snorlax Style</h1>
          </div>
          <div className="summary overflow-hidden text-[1rem] md:text-[1.4rem] md:max-h-[168px] font-normal text-slate-700 dark:text-[#e2e2e2] text-justify md:text-start transition-all duration-300">
            <p>Nothing beats starting the day with coffee and some gaming! My Snorlax-themed setup, complete with plushies and custom decor, is the ultimate cozy space for relaxed mornings. With my "But first, coffee." mug in hand and a Snorlax scene on screen, it is the perfect vibe for unwinding. How do you kick off your gaming day?</p>
          </div>
          
          <div className="author flex items-center justify-center md:justify-start gap-4 transition-all duration-300">
            <div className="pfp w-12 h-12 rounded-full overflow-hidden transition-all duration-300">
              <img src="/pfp.jpeg" alt="pfp" />
            </div>
            <div className="bio flex flex-col gap-0 transition-all duration-300">
              <span className='font-medium text-lg'>Branden Skeli</span>
              <span className='text-purple-500'>Just now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;