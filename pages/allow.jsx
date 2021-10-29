import { useRouter } from "next/router";

export default function allow() {
	const router = useRouter();
	const token = router.query.request_token;
	if (token && router.query.approved === "true") {
		(async () => {
			const session = await fetch(
				"https://api.themoviedb.org/3/authentication/session/new?api_key=5a997520f792536c9681f8b58926aa14",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						request_token: token,
					}),
				}
			).then((data) => data.json());

			if (session.success) {
				localStorage.setItem("session", session.session_id);
				router.push("/");
			}
		})();
	}
	return <div>Error</div>;
}
