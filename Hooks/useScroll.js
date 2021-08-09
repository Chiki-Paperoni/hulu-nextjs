import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";

//starts loading new movies when loader is in viewport
//starting from page 2 assuming page 1 is initialy rendered
export default function useScroll(loader) {
	const [list, setList] = useState([]);
	const [page, setPage] = useState(2);

	const router = useRouter();
	const genre = router.query.genre;

	useEffect(() => {
		setList([]);
		setPage(2);
	}, [genre]);
	useEffect(() => {
		async function fetchMovies() {
			const res = await fetch(
				`/api/movies?genre=${genre || ""}&page=${page}`
			).then((r) => r.json());
			setList((prev) => [...prev, ...res]);
		}
		fetchMovies();
	}, [page]);

	const handleObserver = useCallback((entries) => {
		const target = entries[0];
		if (target.isIntersecting) {
			setPage((prev) => prev + 1);
		}
	}, []);
	useEffect(() => {
		const option = {
			root: null,
			rootMargin: "20px",

			threshold: 0,
		};
		const observer = new IntersectionObserver(handleObserver, option);
		if (loader.current) observer.observe(loader.current);
	}, [handleObserver]);

	return { list };
}
