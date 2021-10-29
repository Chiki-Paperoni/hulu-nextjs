import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
const DOMAIN = process.env.DOMAIN || "localhost:3000";

export default function Header(props: any) {
	const login = async () => {
		const reqToken = await fetch(
			"https://api.themoviedb.org/3/authentication/token/new?api_key=5a997520f792536c9681f8b58926aa14"
		)
			.then((data) => data.json())
			.then((result) => result.request_token);
		window.open(
			`https://www.themoviedb.org/authenticate/${reqToken}?redirect_to=http://${DOMAIN}/allow`
		);
		sessionStorage.setItem("reqToken", reqToken);
	};

	return (
		<header className="header">
			<div className="icons">
				<HeaderItem title="HOME" icon={HomeIcon} />
				<HeaderItem title="TRENDING" icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" icon={CollectionIcon} />
				<HeaderItem title="SEARCH" icon={SearchIcon} />
				<HeaderItem title="Login" icon={UserIcon} handler={login} />
			</div>

			<Image
				className="logo"
				src="https://links.papareact.com/ua6"
				width={200}
				height={100}
			/>
		</header>
	);
}
