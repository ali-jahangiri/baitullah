import Link from "next/link";
import React from "react";

import { NAVIGATION_ITEMS } from "@/src/constants/general";
import BrandLogo from "@/src/assets/icons/brand.svg";

const Header = () => (
	<nav className="flex h-24 px-5">
		<Link href="/" className="flex items-center ml-5 mr-2">
			<BrandLogo />
		</Link>
		<div className="flex space-x-reverse space-x-11 h-full items-center font-bold">
			{NAVIGATION_ITEMS.map((item, i) => (
				<Link href={`/${item.path}`} className="" key={i}>
					<p className="">{item.label}</p>
				</Link>
			))}
		</div>
	</nav>
);

export default Header;
