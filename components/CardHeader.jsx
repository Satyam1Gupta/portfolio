import StarIcon from "@/components/StarIcon";
import { twMerge } from "tailwind-merge";

export default function CardHeader({title, description, className}) {
	return (
		<div className={twMerge("flex flex-col ",className)}>
			<div className="inline-flex gap-2 items-center">
				<div className="size-9 text-emerald-300">
					<StarIcon />
				</div>
				<h3 className="text-3xl font-serif">{title}</h3>
			</div>
			<p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
				{description}
			</p>
		</div>
	);
}
