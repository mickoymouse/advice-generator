import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Frontend Mentor | Advice generator app" },
		{
			name: "description",
			content: "Advice generator solution for fem challenges.",
		},
	];
};

export default function Index() {
	return <div>Advice # 1</div>;
}
