import Link from "next/link";
import React from "react";

import { NAVIGATION_ITEMS } from "@/src/constants/general";
import UserLogo from "@/src/assets/icons/user.svg";
import CartLogo from "@/src/assets/icons/shopping-cart.svg";

const Header = () => {
	return (
		<nav className="flex h-24 px-5">
			<div className="flex space-x-reverse space-x-11 h-full items-center font-bold">
				{NAVIGATION_ITEMS.map((item, i) => (
					<Link href={`/${item.path}`} className="" key={i}>
						<p className="">{item.label}</p>
					</Link>
				))}
			</div>

			<div className="flex items-center mr-auto gap-8">
				<div className="flex item-center">
					<UserLogo className="w-6 h-6 fill-gray-600 " />
				</div>
				<div className="flex item‍‍‍‍‍‍‍‍‍‍‍-center">
					<CartLogo className="w-6 h-6 fill-gray-600 " />
				</div>
			</div>
			<div className="flex items-center rounded-2xl shadow-lg h-10 p-3 my-auto mr-4 font-light">
				<span className="block rounded-full bg-red-600 ml-2 w-3 h-3" />
				پخش زنده
			</div>
		</nav>
	);
};

export default Header;
