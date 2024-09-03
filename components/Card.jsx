import {twMerge} from 'tailwind-merge'
import grainImage from "../assets/images/grain.jpg"

export const Card = ({classname, children}) => {
    return (
        <div className={twMerge("p-6 bg-gray-800 rounded-3xl relative z-0 overflow-hidden  after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20", classname)}>
            <div style={{backgroundImage: `url(${grainImage.src})`}} className='absolute inset-0 -z-10 opacity-5'></div>
            {children}
        </div>
    )
}