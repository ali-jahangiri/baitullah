import Link from "next/link";
import React from "react";

import { NAVIGATION_ITEMS } from "@/src/constants/general";
import Container from "../ui/container";
import { Brand } from "@/src/assets/icons";

const Header = () => (
	<nav>
		<Container className="flex items-center mt-5 mb-8">
			<Link href="/" className="flex items-center ml-10 ">
				<Brand />
			</Link>
			<div className="flex space-x-reverse space-x-11 h-full items-center font-bold">
				{NAVIGATION_ITEMS.map((item, i) => (
					<Link href={`/${item.path}`} className="" key={i}>
						<p className="">{item.label}</p>
					</Link>
				))}
			</div>
		</Container>
	</nav>
);

export default Header;
