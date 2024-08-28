import { MainLayout } from "../components/layouts/MainLayout";
import { About } from "../components/pages/About";
import { Accounting } from "../components/pages/Accounting";
import { Administration } from "../components/pages/Administration";
import { Auswahllisten } from "../components/pages/Auswahllisten";
import { Contact } from "../components/pages/Contact";
import { Details } from "../components/pages/Details";
import { Films } from "../components/pages/Films";
import { Help } from "../components/pages/Help";
import { Home } from "../components/pages/Home/Home";
import { PageNotFound } from "../components/pages/PageNotFound/PageNotFound";
import { Post0ffice } from "../components/pages/Post0ffice";
import { Serials } from "../components/pages/Serials";
import { Statistik } from "../components/pages/Statistik";
import { Warenbestand } from "../components/pages/Warenbestand";
import { pageRoutesEndpoints } from "../endpoints/pageRoutesEndpoints";

import type { ILayoutPaths } from "../types/layout";

export const pageRoutes: ILayoutPaths[] = [
	{
		id: 1,
		path: pageRoutesEndpoints.home,
		element: <MainLayout />,
		children: [
			{
				id: 1,
				path: "",
				index: true,
				element: <Home />,
			},
			{
				id: 2,
				path: "/about",
				index: false,
				element: <About />,
			},
			{
				id: 3,
				path: "/contact",
				index: false,
				element: <Contact />,
			},
			{
				id: 4,
				path: "/films",
				index: false,
				element: <Films />,
			},
			{
				id: 5,
				path: "/serials",
				index: false,
				element: <Serials />,
			},
			{
				id: 6,
				path: "/details",
				index: false,
				element: <Details />,
			},
			{
				id: 7,
				path: "/accounting",
				index: false,
				element: <Accounting />,
			},
			{
				id: 8,
				path: "/post0ffice",
				index: false,
				element: <Post0ffice />,
			},
			{
				id: 9,
				path: "/administration",
				index: false,
				element: <Administration />,
			},
			{
				id: 10,
				path: "/help",
				index: false,
				element: <Help />,
			},
			{
				id: 11,
				path: "/warenbestand",
				index: false,
				element: <Warenbestand />,
			},
			{
				id: 12,
				path: "/auswahllisten",
				index: false,
				element: <Auswahllisten />,
			},
			{
				id: 13,
				path: "/statistik",
				index: false,
				element: <Statistik />,
			},
		]
	},
	{
		id: 2,
		path: pageRoutesEndpoints.pageNotFound,
		index: false,
		element: <PageNotFound />,
	},
];