/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FC, MouseEvent as MouseEventReact } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

import type { IExonTabs } from "../../../types/exonTabs";

interface IExonTabsItemProps extends IExonTabs {
	handleMouseEnter?: () => void;
	handleMouseLeave?: () => void;
}

export const ExonTabsItem: FC<IExonTabsItemProps> = ({
	tab,
	dragging,
	removeTabItem,

	handleMouseEnter,
	handleMouseLeave,
}): JSX.Element => {
	const location = useLocation();
	const navigation = useNavigate();

	const handleSelectTab = (): void => {
		if (dragging) return;
		navigation(tab.url);
	};

	const handleCloseTab = (event: MouseEventReact<HTMLElement>, tabId: number): void => {
		event.stopPropagation();
		event.preventDefault();

		if (removeTabItem) {
			removeTabItem(tabId);
		}
	};

	return (
		<div
			onClick={handleSelectTab}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={classNames(
				"group relative flex items-center text-center text-base py-2 px-7 select-none after:absolute after:top-0 after:left-0 after:w-full after:h-[2px] cursor-pointer",
				location.pathname === tab.url && "after:bg-[#4690E2]",
				dragging && "bg-[#7f858d] text-white",
				!dragging && "bg-white text-black"
			)}
		>
			<span>{tab.label}</span>
			{!dragging && (
				<button
					onClick={(event) => handleCloseTab(event, tab.id)}
					className={classNames(
						"absolute top-1/2 right-1 -translate-y-1/2 text-[#ee3f3e] opacity-0 group-hover:opacity-100 transition-colors duration-300 ease-in-out",
					)}
				>
					<AiFillCloseCircle />
				</button>
			)}
		</div>
	);
};

