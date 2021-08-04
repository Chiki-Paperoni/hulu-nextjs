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
