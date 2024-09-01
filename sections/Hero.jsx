import memojiIMage from '../assets/images/memoji-computer.png'
import grainImage from '../assets/images/grain.jpg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import starIcon from '../assets/icons/star.svg';
import Image from 'next/image'
import HeroOrbit from '@/components/HeroOrbit';

export default function Hero() {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
            <div className='absolute inset-0 -z-30 opacity-5'
                style={{backgroundImage: `url(${grainImage.src})`}}
            ></div>

            {/* Ring Section */}
            <div className="hero-ring size-[620px] "></div>
            <div className="hero-ring size-[820px] "></div>
            <div className="hero-ring size-[1020px] "></div>
            <div className="hero-ring size-[1220px] "></div>

            {/* Star Section */}
            <HeroOrbit size={"800"} rotation={-72}>
                <div className='size-28 text-emerald-300  inline-flex '>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"550"} rotation={20}>
                <div className='size-12 text-emerald-300  inline-flex '>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"590"} rotation={98}>
                <div className='size-8 text-emerald-300  inline-flex '>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"430"} rotation={-14}>
                <div className='size-8 text-emerald-300/20  inline-flex '>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"440"} rotation={79}>
                <div className='size-5 text-emerald-300/20  inline-flex '>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"530"} rotation={178}>
                <div className='size-10 text-emerald-300/20  inline-flex '>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"710"} rotation={144}>
                <div className='size-14 text-emerald-300/20  inline-flex '>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor"/>
                    </svg>
                </div>
            </HeroOrbit>
            <HeroOrbit size={"720"} rotation={85}>
                <div className='size-3 bg-emerald-300/20 rounded-full inline-flex '></div>
            </HeroOrbit>
            <HeroOrbit size={"520"} rotation={-41}>
                <div className='size-2 bg-emerald-300/20 rounded-full inline-flex '></div>
            </HeroOrbit>
            <HeroOrbit size={"750"} rotation={-5}>
                <div className='size-2 bg-emerald-300/20 rounded-full inline-flex '></div>
            </HeroOrbit>
        </div>
        <div className="flex flex-col items-center">
            <Image className='size-[100px]' 
            src={memojiIMage} alt="person peeking from behind laptop"/>
            <div className='flex items-center gap-4 bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5'>
                <div className='bg-green-500 size-2.5 rounded-full'></div>
                <div>Available for new projects</div>
            </div>
            <div className='max-w-lg mx-auto'>
                <h1 className='text-3xl md:text-5xl font-serif text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
                <p className='mt-4 text-center md:text-lg text-gray-400'>I specialiazed in transforming design into functional, high-performing web application. Let's discuss your next project</p>
            </div>
            <div className='mt-8 flex flex-col gap-4 md:flex-row justify-center'>
                <button className='font-semibold inline-flex items-center h-12 px-6 gap-2 border border-white/15 rounded-xl'>
                    <span className='font-semibold'>Explore My Work</span>
                    <Image src={ArrowDown} alt="arrow-down" className='size-5'/>
                </button>
                <button className='inline-flex items-center h-12 px-6 gap-2 bg-white border border-white rounded-xl text-gray-900'>
                    <span>👋</span>
                    <span className='font-semibold'>Let's Connect</span>
                </button>
            </div>
        </div>
    </div>
  )
}