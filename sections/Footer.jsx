import { ArrowUpRightIcon } from "@/components/SvgIcons";

const footerLinks = [
	{
		title: "Linkedin",
		href: "https://www.linkedin.com/in/satyam-gupta-a457b4207",
	},
	{ title: "Github", href: "https://github.com/Satyam1Gupta" },
	{ title: "Twitter", href: "/" },
	{ title: "Instagram", href: "/" },
	{ title: "YouTube", href: "/" },
];
export default function Footer() {
	return (
		<footer className="relative overflow-x-clip -z-1 px-4 flex justify-center">
			<div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
			<div className="container">
				<div className="border-t py-6 border-white/15 text-sm flex flex-col md:flex-row justify-between items-center gap-8">
					<div>
						<div className="text-gray-600">&copy; 2024 All right reserved.</div>
					</div>
					<nav className="flex flex-col md:flex-row items-center gap-8 ">
						{footerLinks.map((footerLink) => (
							<a
								className="inline-flex gap-1.5 font-semibold"
								href={footerLink.href}
								target="blank"
							>
								<span>{footerLink.title}</span>
								<div className="size-">
									<ArrowUpRightIcon />
								</div>
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}
