import Image from 'next/image'
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png"
import grainImage from "../assets/images/grain.jpg"

const portfolioProjects=[ 
  {
    company: "Exposys Data Labs",
    year: 2023,
    title: "Full Stack Developer",
    results: [
      { title: "Created full end-to-end project"},
      { title: "Enable admin dashbord for the shop owner"},
      { title: "Increase mobile traffic by 30%"},
    ],
    link: "collegebooks.in",
    image: darkSaasLandingPage
  },
  {
    company: "Exposys Data Labs",
    year: 2023,
    title: "Full Stack Developer",
    results: [
      { title: "Created full end-to-end project"},
      { title: "Enable admin dashbord for the shop owner"},
      { title: "Increase mobile traffic by 30%"},
    ],
    link: "collegebooks.in",
    image: lightSaasLandingPage
  },
  {
    company: "Exposys Data Labs",
    year: 2023,
    title: "Full Stack Developer",
    results: [
      { title: "Created full end-to-end project"},
      { title: "Enable admin dashbord for the shop owner"},
      { title: "Increase mobile traffic by 30%"},
    ],
    link: "collegebooks.in",
    image: aiStartupLandingPage
  },
]
export default function Projects() {
  return (
    <div className='flex justify-center'>
      <div className="container pb-16 lg:py-24">
        <div className="flex justify-center ">
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent'>Real-world Results</p>
        </div>
        <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>Featured Projects</h2>
        <p className='text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>See how I transformed concepts into engaging digitals experiences.</p>
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {
            portfolioProjects.map((project,index)=>(
             <div key={index} className="px-8 pt-8 md:pt-12 md:px-10 lg:px-20 lg:pt-16 bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pointer-events-none">
               <div style={{backgroundImage: `url(${grainImage.src})`}} className='absolute inset-0 -z-10 opacity-5'></div>
               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className='lg:pb-16'>
                    <div className='inline-flex gap-2 uppercase text-sm font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent'>
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>{project.title}</h3>
                    <hr className='border-t-2 border-white/5 mt-4 md:mt-5'/>
                    <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                      {
                        project.results.map((result)=>(
                          <li className='flex gap-2 text-sm md:text-base text-white/50'>
                            <div className='chech-circle-icon size-6'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            </div>
                            <span>{result.title}</span>
                          </li>
                        ))
                      }
                    </ul>
                    <a href={project.link}>
                      <button className='flex items-center justify-center gap-2 mt-8 font-semibold bg-white h-12 w-full md:w-auto px-6 rounded-xl text-gray-950'>
                        <span>View Live Site</span>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                      </button>
                    </a>
                    </div>
                  <div>
                    <Image src={project.image} alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
