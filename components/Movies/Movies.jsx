import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";

//pass genre string in props
export default function Movies(props) {
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log("in effect");
		async function fetchData() {
			const result = await fetch(
				`/api/movies?genre=${props.genre || "Trending"}`
			).then((r) => r.json());

			setList(result);
		}

		fetchData();
	}, [props.genre]);
	return (
		<div className="results">
			{list?.map((e) => (
				<Thumbnail key={e.id} movie={e} />
			))}
		</div>
	);
}
