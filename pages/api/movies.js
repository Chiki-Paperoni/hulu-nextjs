// import type { NextApiRequest, NextApiResponse } from "next";
import requests from "../../utils/requests";

export default async function handler(req, res) {
	const genre = req.query.genre;
	const result = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.Trending.url
		}`
	).then((data) => data.json());
	res.send(result.results);
}
