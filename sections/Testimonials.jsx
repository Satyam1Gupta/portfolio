import Image from "next/image"
import memojiAvatar1 from "../assets/images/memoji-avatar-1.png"
import memojiAvatar2 from "../assets/images/memoji-avatar-2.png"
import memojiAvatar3 from "../assets/images/memoji-avatar-3.png"
import memojiAvatar4 from "../assets/images/memoji-avatar-4.png"
import memojiAvatar5 from "../assets/images/memoji-avatar-5.png"
import grainImage from "../assets/images/grain.jpg"
import SectionHeader from "@/components/SectionHeader"
import { Card } from "@/components/Card"

const testimonials = [
  {
    name: "Aarav Sharma",
    position: "Full Stack Developer",
    text: "Working with Satyam was a game-changer. His ability to build scalable and responsive web applications is truly impressive. His attention to detail and commitment to delivering high-quality code are unmatched.",
    avatar: memojiAvatar1,
  },
  {
    name: "Riya Mehta",
    position: "UI/UX Designer",
    text: "Satyam's expertise in frontend development and his deep understanding of user experience make him a great developer to work with. His collaborative approach and innovative ideas consistently enhance our projects.",
    avatar: memojiAvatar2,
  },
  {
    name: "Neeraj Patel",
    position: "Project Manager",
    text: "Satyam consistently exceeds expectations with his technical skills and problem-solving abilities. His proactive attitude and dedication to the project's success make him a valuable team member.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ananya Gupta",
    position: "Data Scientist",
    text: "Satyam’s understanding of complex server architecture and his ability to integrate various technologies seamlessly have been invaluable. He’s always up for a challenge and delivers impressive results.",
    avatar: memojiAvatar4,
  },
  {
    name: "Kunal Verma",
    position: "Software Engineer",
    text: "Satyam brings a perfect blend of technical expertise and creativity to every project. His coding skills, combined with his passion for developing unique solutions, make him an exceptional developer.",
    avatar: memojiAvatar5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-4 lg:py-24">
      <div className="containerr">
      <SectionHeader
        eyebrow="Happy Clients"
        title="What Clients Say About Me"
        description="Don't just take my word for it. See what my clients have to say about my work."
      />
      <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial)=>(
            <Card key={testimonial.name} classname="max-w-xs md:p-8 md:max-w-md">
              <div className="flex items-center gap-4">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                </div>
                <div className="">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/40">{testimonial.position}</div>
                </div>
              </div>
              <p className="mt-4 text-sm md:mt-6 md:text-base">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
