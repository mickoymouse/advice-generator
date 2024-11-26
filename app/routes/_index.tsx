import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAdvice } from "~/actions/advice";

export const meta: MetaFunction = () => {
	return [
		{ title: "Frontend Mentor | Advice generator app" },
		{
			name: "description",
			content: "Advice generator solution for fem challenges.",
		},
	];
};

export const loader = async () => {
	const advice: Advice = await getAdvice();
	return advice;
};

export default function Index() {
	const { id, advice } = useLoaderData<typeof loader>();

	return (
		<main className="bg-dark-blue h-screen w-screen">
			<section className="h-full w-full flex items-center justify-center px-4">
				<div
					className="bg-dark-grayish-blue w-full min-h-[315px] max-h-[315px] rounded-lg 
                      flex flex-col items-center justify-center px-4 gap-6 relative
                      md:max-w-[540px] md:min-h-[332px] md:max-h-[332px] md:px-16"
				>
					<h1 className="text-[11px] font-semibold text-neon-green tracking-[3.46px] uppercase md:text-[13px]">
						Advice #{id}
					</h1>
					<p className="text-center text-2xl font-semibold text-white tracking-[-0.26px] md:text-[28px]">
						"{advice}"
					</p>
					<picture className="pb-6 select-none">
						<source
							media="(min-width: 768px)"
							srcSet="/pattern-divider-desktop.svg"
						/>
						<img src="/pattern-divider-mobile.svg" alt="divider" />
					</picture>
					<div className="select-none w-[64px] h-[64px] bg-neon-green rounded-full flex items-center justify-center absolute bottom-[-32px] gradient-shadow cursor-pointer">
						<img src="/icon-dice.svg" alt="dice" />
					</div>
				</div>
			</section>
		</main>
	);
}
