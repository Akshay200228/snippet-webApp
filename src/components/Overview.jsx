import React from 'react';

const Overview = () => {
  return (
    <section id='overview' className={`relative bg-[#29347a] mt-20 sm:mt-0`}>
      <div className='absolute top-0 left-0 hidden w-40 h-10 rotate-180 sm:block'>
      <span className="box-border absolute inset-0 block p-0 m-0 overflow-hidden border-0 opacity-100 w-initial h-initial bg-none">
          <img 
            src="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg" alt="bg" 
            decoding="async" data-nimg="fill" sizes="100vw"
            srcSet="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 640w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 750w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 828w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1080w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1200w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1920w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 2048w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 3840w"
            className="box-border absolute inset-0 block w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 m-auto border-none"
          />
        </span>
      </div>

      <div className='absolute bottom-0 right-0 hidden w-40 h-10 sm:block'>
        <span className="box-border absolute inset-0 block p-0 m-0 overflow-hidden border-0 opacity-100 w-initial h-initial bg-none">
          <img 
            src="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg" alt="dotted_illus" 
            decoding="async" data-nimg="fill" sizes="100vw"
            srcSet="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 640w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 750w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 828w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1080w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1200w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1920w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 2048w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 3840w"
            className="box-border absolute inset-0 block w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 mx-auto border-none"
          />
        </span>
      </div>

      <div className="relative mx-auto grid max-w-maxScreen grid-cols-2 gap-y-16 overflow-hidden py-16 px-10 font-bold text-[#e8e6e3] sm:grid-cols-4 md:gap-0">
        <div className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r ">
          <div className="text-4xl md:text-5xl">
            <span>5</span>+
          </div>
          <div className="font-medium text-center">
            Landing Pages
            <br />
            Templates
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r ">
          <div className="text-4xl md:text-5xl">
            <span>10</span>+
          </div>
          <div className="font-medium text-center">
            Buttons
            <br />
            Animations
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r ">
          <div className="text-4xl md:text-5xl">
            <span>10</span>+
          </div>
          <div className="font-medium text-center">
            Cards
            <br />
            Components
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4 ">
          <div className="text-4xl md:text-5xl">
            <span>10</span>+
          </div>
          <div className="font-medium text-center">
            Loader
            <br />
            Animation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
