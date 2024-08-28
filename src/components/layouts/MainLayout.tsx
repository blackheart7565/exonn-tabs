/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Outlet } from "react-router-dom";

import { ExonTabs } from "../elements/ExonTabs/ExonTabs";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
	return (
		<>
			<ExonTabs />
			<main>
				<Outlet />
			</main>
		</>
	);
};