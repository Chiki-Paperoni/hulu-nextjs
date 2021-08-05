import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
export default function Thumbnail({ movie }) {
	const BASE_URL = "https://image.tmdb.org/t/p/original/";
	return (
		<div className="thumbnail">
			<Image
				layout="responsive"
				src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
				width={1920}
				height={1080}
			/>
			<p className="overview">{movie.overview}</p>
			<p className="title">
				{movie.title || movie.original_title || movie.name || ""}
			</p>
			<p className="stats">
				{movie.release_date || movie.first_air_date}{" "}
				<ThumbUpIcon className="thumbUp" />
				{movie.vote_count}
			</p>
		</div>
	);
}
