import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";

export default function Movies(props) {
	return (
		<div className="results">
			{props.movies?.map((e) => {
				return <Thumbnail key={e.id} movie={e} />;
			})}
		</div>
	);
}
