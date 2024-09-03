import React from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbit({
	children,
	size,
	rotation,
	orbitDuration,
	shouldOrbit = false,
  spinDuration,
  shouldSpin=false
}) {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
			<div
				className={twMerge(shouldOrbit === true && "animate-spin")}
				style={{ animationDuration: orbitDuration }}
			>
				<div
					className=""
					style={{
						width: `${size}px`,
						height: `${size}px`,
						transform: `rotate(${rotation}deg)`,
					}}
				>
						<div
							className={twMerge(shouldSpin===true && "inline-flex animate-spin ")}
							style={{animationDuration: spinDuration, transform: `rotate(${rotation * -1}deg)` }}
						>
							{children}
					</div>
				</div>
			</div>
		</div>
	);
}
