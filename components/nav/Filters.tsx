import requests from "../../utils/requests";
import { useRouter } from "next/router";
export default function Filters() {
	const router = useRouter();
	return (
		<nav className="navigation">
			<div className="scroller">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						className="genre"
						onClick={() => router.push(`/?genre=${key}`)}
						// router.push({ query: { ...router.query, genre: key } }) for just ading genre param to current
						key={key}
					>
						{title}
					</h2>
				))}
			</div>

			<div className="fade"></div>
		</nav>
	);
}
