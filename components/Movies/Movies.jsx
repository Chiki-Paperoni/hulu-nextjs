import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";

//pass genre string in props
export default function Movies(props) {
	console.log(props.movies);
	// const [list, setList] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const result = await fetch(
	// 			`/api/movies?genre=${props.genre || "Trending"}`
	// 		).then((r) => r.json());

	// 		setList(result);
	// 	}

	// 	fetchData();
	// }, [props.genre]);
	return (
		<div className="results">
			{props.movies?.map((e) => (
				<Thumbnail key={e.id} movie={e} />
			))}
		</div>
	);
}
