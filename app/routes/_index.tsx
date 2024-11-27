import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getAdvice } from "~/actions/advice";

// meta data of the page
export const meta: MetaFunction = () => {
	return [
		{ title: "Frontend Mentor | Advice generator app" },
		{
			name: "description",
			content: "Advice generator solution for fem challenges.",
		},
	];
};

// loader -> loads data on page mount
export const loader = async () => {
	try {
		const advice: Advice = await getAdvice();
		return advice;
	} catch (error) {
		return {
			id: 0,
			advice: "n/a",
		};
	}
};

export default function Index() {
	// get data from loader
	const { id, advice } = useLoaderData<typeof loader>();
	// state to store advice data
	const [adviceData, setAdviceData] = useState<Advice>({ id, advice });

	return (
		<main className="bg-dark-blue h-screen w-screen">
			<section className="h-full w-full flex items-center justify-center px-4">
				<div
					className="bg-dark-grayish-blue w-full min-h-[315px] max-h-[315px] rounded-lg 
                      flex flex-col items-center justify-center px-4 gap-6 relative
                      md:max-w-[540px] md:min-h-[332px] md:max-h-[332px] md:px-16"
				>
					<h1 className="text-[11px] font-semibold text-neon-green tracking-[3.46px] uppercase md:text-[13px]">
						Advice #{adviceData.id}
					</h1>
					<p className="text-center text-2xl font-semibold text-light-cyan tracking-[-0.26px] md:text-[28px]">
						"{adviceData.advice}"
					</p>
					<picture className="pb-6 select-none">
						<source
							media="(min-width: 768px)"
							srcSet="/pattern-divider-desktop.svg"
						/>
						<img src="/pattern-divider-mobile.svg" alt="divider" />
					</picture>
					{/* on button click, fetch new advice */}
					<button
						className="select-none w-[64px] h-[64px] bg-neon-green rounded-full flex items-center justify-center absolute bottom-[-32px] gradient-shadow"
						onClick={async () => {
							try {
								const advice: Advice = await getAdvice();
								setAdviceData(advice);
							} catch {
								setAdviceData({ id: 0, advice: "n/a" });
							}
						}}
					>
						<img src="/icon-dice.svg" alt="dice button icon" />
					</button>
				</div>
			</section>
		</main>
	);
}
