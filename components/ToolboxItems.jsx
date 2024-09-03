
import { twMerge } from "tailwind-merge";

export default function ToolboxItems({ toolBoxItems, className, itemsWrapperClassName }) {
	return (
		<div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
			<div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
				{toolBoxItems.map((item) => (
					<div
						key={item.title}
						className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
					>
						{/* <svg className="size-0 absolute">
							<linearGradient id="svg-icon-gradient">
								<stop offset="0%" stopColor="rgb(110 231 183)"/>
								<stop offset="100%" stopColor="rgb(56 189 248)"/>
							</linearGradient>
						</svg> */}
						<div className="size-6 text-emerald-300 fill-[url(#svg-icon-gradient)]">{item.icon}</div>
						<span className="font-semibold">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
}
