import { useEffect, useState } from "react";

export default function Movies(props) {
	const [list, setList] = useState();

	useEffect(() => {
		async function fetchData() {
			const result = await fetch(
				`/api/movies?genre=${props.genre || "Trending"}`
			).then((r) => r.json());
			setList(result);

			console.log(list);
		}
		fetchData();
	}, [props.genre]);
	return (
		<div>
			{list?.map((e) => (
				<h1 key={e.id}>{e.original_title}</h1>
			))}
		</div>
	);
}
