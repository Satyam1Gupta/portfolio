import memojiIMage from '../assets/images/memoji-computer.png'
import grainImage from '../assets/images/grain.jpg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import Image from 'next/image'


export default function Hero() {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0'>
        <div className='absolute inset-0 -z-30 opacity-5'
            style={{backgroundImage: `url(${grainImage.src})`}}
        ></div>
        <div className="containerr flex flex-col items-center">
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
                    <Image src={ArrowDown} alt="arrow-down" className='size-6'/>
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