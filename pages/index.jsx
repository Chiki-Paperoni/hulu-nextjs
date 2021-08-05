import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Filters from "../components/nav/Filters";
import Movies from "../components/Movies/Movies";
import requests from "../utils/requests";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

// import { router, useRouter } from "next/router";

export default function Home(props) {
	const router = useRouter();
	const genre = router.query.genre;
	//console.log(props.results);

	// THIS SHIEEET DONT WORK ON FIRST LOAD SOMEHOW????

	return (
		<div>
			<Head>
				<title>Create Next App | Hulu</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Filters />
			<Movies genre={genre || "Trending"} />
		</div>
	);
}

//alternative for useEffect in Movies component ToLearn return goes to props of Home
// export async function getServerSideProps(context) {
// 	const genre = context.query.genre;

// 	const request = await fetch(
// 		`https://api.themoviedb.org/3${
// 			requests[genre]?.url || requests.Trending.url
// 		}`
// 	).then((res) => res.json());
// 	return {
// 		props: {
// 			results: request.results,
// 		},
// 	};
// }
