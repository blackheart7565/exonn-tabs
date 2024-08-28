import { ReactNode } from "react";

export interface ITab {
	id: number;
	icon?: ReactNode;
	label: string;
	url: string;
	pinned: boolean;
}

export interface IExonTabs {
	tab: ITab;
	dragging?: boolean;
	removeTabItem?: (tabId: number) => void;
}