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
function Header() {
	return (
		<header className="header">
			<div className="icons">
				<HeaderItem title="HOME" icon={HomeIcon} />
				<HeaderItem title="TRENDING" icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" icon={CollectionIcon} />
				<HeaderItem title="SEARCH" icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" icon={UserIcon} />
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

export default Header;
