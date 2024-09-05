"use client";
import Image from "next/image";
import { motion } from "framer-motion"
import { useRef } from 'react';
import { Card } from "@/components/Card";

import SectionHeader from "@/components/SectionHeader";
import bookImage from "../assets/images/book-cover.png";
import {
	HTMLIcon,
	JavascriptIcon,
	CSSIcon,
	ReactIcon,
	GithubIcon,
	NextJsIcon,
	NodeIcon,
	MongoDbIcon,
	ExpressIcon,
	Typescript
} from "@/components/SvgIcons";
import mapImage from "../assets/images/my-map.jpg";
import smileMemoji from "../assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolBoxItems = [
	{
		title: "Javascript",
		icon: <JavascriptIcon />,
	},
	{
		title: "Typescript",
		icon: <Typescript />,
	},
	{
		title: "HTML5",
		icon: <HTMLIcon />,
	},
	{
		title: "Node Js",
		icon: <NodeIcon />,
	},
	{
		title: "CSS3",
		icon: <CSSIcon />,
	},
	{
		title: "React",
		icon: <ReactIcon />,
	},
	{
		title: "Github",
		icon: <GithubIcon />,
	},
	{
		title: "Next.js",
		icon: <NextJsIcon />,
	},
	{
		title: "Mongo Db",
		icon: <MongoDbIcon />,
	},
	{
		title: "Express Js",
		icon: <ExpressIcon />,
	},
];
const hobbies = [
	{ title: "Photography", emoji: "📸", left: "50%", top: "5%" },
	{ title: "Fitness", emoji: "🏋️‍♂️", left: "10%", top: "25%" },
	{ title: "Music", emoji: "🎵", left: "35%", top: "40%" },
	{ title: "Cricket", emoji: "🏏", left: "70%", top: "45%" },
	{ title: "Writing", emoji: "✍️", left: "20%", top: "55%" },
	{ title: "Badminton", emoji: "🏸", left: "2%", top: "75%" },
	{ title: "Reading", emoji: "📚", left: "45%", top: "70%" },
	{ title: "Innovation", emoji: "🚀", left: "%", top: "%" }, // Reflects turning ideas into reality
	{ title: "Hackathons", emoji: "🏆", left: "%", top: "%" }, // Emphasizes your achievement as a hackathon finalist
	{ title: "Tech Blogging", emoji: "📝", left: "25%", top: "85%" },
];

export default function About() {
	const constraintRef = useRef(null);
	//console.log("Constraint Reference:", constraintRef.current);
	return (
		<div id="about" className="py-20 lg:py-28 px-4 flex justify-center">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glipse Into My World"
					description="Learn more about who I am, what I do, and what inspires me"
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
						<Card classname="h-[320px] md:col-span-2 lg:col-span-1">
							<div className="flex flex-col ">
								<CardHeader
									title="My Reads"
									description="Explore the books shaping my perspectives."
								/>
								<div className="w-40 mx-auto mt-8">
									<Image src={bookImage} alt="Book cover" />
								</div>
							</div>
						</Card>
						<Card classname="h-[320px] p-0 md:col-span-3 lg:col-span-2">
							<CardHeader
								className="px-6 pt-6 pb-4"
								title="My Toolbox"
								description="Explore the technologies and tools I use to turn my idea intoreality."
							/>
							<ToolboxItems toolBoxItems={toolBoxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
							<ToolboxItems
								toolBoxItems={toolBoxItems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:15s]"
							/>
						</Card>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
						<Card classname="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								className="px-6 py-6"
								title="Beyond the Code"
								description="Explore my interest and hobbies beyond the digital realm."
							/>
							<div className="relative flex-1 z-20" ref={constraintRef}>
								{hobbies.map((hobby) => (
									<motion.div
									key={hobby.title}
									style={{ top: hobby.top, left: hobby.left }}
									className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
									drag
									dragConstraints={constraintRef}
									>
										<span className="text-gray-950 font-medium">
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card classname="h-[320px] p-0 md:col-span-2 lg:col-span-1 relative">
							<Image
								src={mapImage}
								alt="map-image"
								className="h-full w-full object-cover"
							/>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after-outline-2 after:rounded-full after:-outline-offset-2 after:outline-gray-950/30">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s] -z-20"></div>
								<Image
									src={smileMemoji}
									alt="smiling emoji"
									className="size-20"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
