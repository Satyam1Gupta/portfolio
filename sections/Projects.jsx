import Image from "next/image";
import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import collegeBookImage from "../assets/images/cb.png";
import sih from "../assets/images/sih.jpg";
import BlogAppImage from "../assets/images/blog.png";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
	{
	  company: "College Book",
	  year: 2023,
	  title: "MERN Stack Developer",
	  results: [
		{ title: "Developed a full-fledged platform for college students to create profiles, share question papers, provide solutions, and chat directly." },
		{ title: "Integrated admin features to review and validate user-submitted content." },
		{ title: "Achieved 3K monthly page views and now scaling for other colleges." },
	  ],
	  link: "https://collegebooks.in",
	  image: collegeBookImage,
	},
	{
	  company: "Exposys Data Labs",
	  year: 2023,
	  title: "Full Stack Developer Intern",
	  results: [
		{ title: "Built an end-to-end e-commerce platform for burger sales." },
		{ title: "Implemented admin dashboards for customised data management." },
		{ title: "Worked on a range of web development tasks, enhancing existing applications." },
	  ],
	  link: "https://brrrgrrrr.netlify.app", 
	  image: darkSaasLandingPage, 
	},
	{
		company: "Blog Application",
		year: 2022,
		title: "MERN Stack Developer",
		results: [
			{ title: "Created a fully dynamic blog application with robust features." },
			{ title: "Deployed on Digital Ocean for enhanced scalability and performance." },
			{ title: "Implemented user authentication, comment systems, and content management." },
		],
		link: "https://github.com/Satyam1Gupta/blogweb1",
		image: BlogAppImage, // replace with the actual image
	},
	{
	  company: "Smart India Hackathon",
	  year: 2022,
	  title: "Finalist - Full Stack Developer",
	  results: [
		{ title: "Developed a Scholarship Verification Portal for government use." },
		{ title: "Automated the verification process for scholarship user's credentials." },
		{ title: "Presented the solution to industry experts, earning national recognition." },
	  ],
	  link: "https://scholarship-portal-india.netlify.app", 
	  image: sih, 
	},
  ];
  
export default function Projects() {
	return (
		<div id="project" className="flex justify-center">
			<div className="container pb-16 lg:py-24">
				<SectionHeader
					eyebrow="Real-world Results"
					title="Featured Projects"
					description="See how I transformed ideas into inovative digitals solutions."
				/>
				<div className="flex flex-col mt-10 md:mt-20 gap-20">
					{portfolioProjects.map((project, index) => (
						<div key={index} className="sticky" style={{top:`calc(64px + ${index * 40}px)`}}>
							<Card
								key={index}
								classname="z-10 px-8 pt-8 md:pt-12 md:px-10 lg:px-20 lg:pt-16 pb-0 "
							>
								<div className="lg:grid lg:grid-cols-2 lg:gap-16">
									<div className="lg:pb-16">
										<div className="inline-flex gap-2 uppercase text-sm font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
											<span>{project.company}</span>
											<span>&bull;</span>
											<span>{project.year}</span>
										</div>
										<h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
											{project.title}
										</h3>
										<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
										<ul className="flex flex-col gap-4 mt-4 md:mt-5">
											{project.results.map((result) => (
												<li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
													<div className="chech-circle-icon size-6">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth="1.5"
															stroke="currentColor"
															class="size-6"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
															/>
														</svg>
													</div>
													<span>{result.title}</span>
												</li>
											))}
										</ul>
										<a href={project.link} target="blank">
											<button className="flex items-center justify-center gap-2 mt-8 font-semibold bg-white h-12 w-full md:w-auto px-6 rounded-xl text-gray-950">
												<span>View Live Site</span>
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														class="feather feather-arrow-up-right"
													>
														<line x1="7" y1="17" x2="17" y2="7"></line>
														<polyline points="7 7 17 7 17 17"></polyline>
													</svg>
												</div>
											</button>
										</a>
									</div>
									<div>
										<Image
											src={project.image}
											alt={project.title}
											className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
										/>
									</div>
								</div>
							</Card>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
