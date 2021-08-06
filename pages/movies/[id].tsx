import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Filters from "../../components/nav/Filters";
export default function Movie(props: any) {
	const router = useRouter();
	console.log(router.query.id);
	return (
		<div>
			<Header />
			<Filters />
			<iframe
				id="ytplayer"
				width="640"
				height="360"
				src={`http://www.youtube.com/embed/${props.results[0].key}`}
				frameBorder="0"
			/>
		</div>
	);
}

//alternative for useEffect in Movies component ToLearn return goes to props of Home
export async function getServerSideProps(context: any) {
	const id = context.query.id;

	const request = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`
	).then((res) => res.json());
	console.log(request.results);

	return {
		props: {
			results: request.results,
		},
	};
}
