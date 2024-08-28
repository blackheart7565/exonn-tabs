import { ReactNode } from "react";

export interface ILayoutPaths {
	id: number;
	path: string;
	index?: boolean;
	element: ReactNode;
	children?: ILayoutPaths[];
}