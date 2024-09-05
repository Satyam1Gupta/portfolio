import { Card } from "@/components/Card";
import { ArrowUpRightIcon } from "@/components/SvgIcons";

export default function Contact() {
	return (
		<div
			id="contact"
			className="py-16 pt-14 lg:py-24 lg:pt-20 px-4 flex justify-center"
		>
			<div className="container">
				<div className=" ">
					<Card classname="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl text-center md:text-left">
						<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
							<div className="flex flex-col">
								<h2 className="font-serif text-2xl md:text-3xl">
									Let's Create something amazing together
								</h2>
								<p className="text-sm mt-2 md:text-base">
									Ready to bring your next project to life? Let's connect and
									discuss how I can help you achieve your goals.
								</p>
							</div>
							<div>
								<a href="mailto:satyamkumarguptaraj@gmail.com">
									<button className="inline-flex items-center text-white bg-gray-900 px-6 h-12 rounded-xl gap-2 w-max">
										<span className="font-semibold">Contact Me</span>
										<div className="">
											<ArrowUpRightIcon />
										</div>
									</button>
								</a>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
