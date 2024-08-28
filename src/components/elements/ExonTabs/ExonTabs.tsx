/* eslint-disable @typescript-eslint/no-empty-object-type */

import { type FC, useMemo, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import classNames from "classnames";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { ExonTabsItem } from "./ExonTabsItem";
import { ExonTabsItemMove } from "./ExonTabsItemMove";
import { useVisibleTabs } from "../../../hooks/useVisibleTabs";

import type { ITab } from "../../../types/exonTabs";

interface IExonTabsProps { }

export const ExonTabs: FC<IExonTabsProps> = (): JSX.Element => {
	const [tabs, setTabs] = useLocalStorage<ITab[]>("tabs", [
		{ id: 1, label: "Home", url: "/", pinned: true },
		{ id: 2, label: "About", url: "/about", pinned: true },
		{ id: 3, label: "Contact", url: "/contact", pinned: false },
		{ id: 4, label: "Films", url: "/films", pinned: false },
		{ id: 5, label: "Serials", url: "/serials", pinned: false },
		{ id: 6, label: "Details", url: "/details", pinned: false },
		{ id: 7, label: "Accounting", url: "/accounting", pinned: false },
		{ id: 8, label: "Statistik", url: "/statistik", pinned: false },
		{ id: 9, label: "Post 0ffice", url: "/post0ffice", pinned: false },
		{ id: 10, label: "Administration", url: "/administration", pinned: false },
		{ id: 11, label: "Help", url: "/help", pinned: false },
		{ id: 12, label: "Warenbestand", url: "/warenbestand", pinned: false },
		{ id: 13, label: "Auswahllisten", url: "/auswahllisten", pinned: false },
	]);
	const pinnedTabs = useMemo(() => tabs.filter(item => item.pinned), [tabs]);
	const scrollableTabs = useMemo(() => tabs.filter(item => !item.pinned), [tabs]);

	const containerRef = useRef<HTMLUListElement | null>(null);
	const { hiddenTabs, tabsRef } = useVisibleTabs<HTMLUListElement, HTMLLIElement>(containerRef, scrollableTabs);
	const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

	const removeTabItem = (id: number): void => {
		setTabs(prev => prev.filter(item => item.id !== id));
	};

	const handleOpenDropDown = () => {
		setIsOpenDropDown(prev => !prev);
	};

	return (
		<div
			className="py-20 px-20"
		>
			<nav className="flex items-center shadow-sm shadow-black/50">
				<ul
					className="flex items-center gap-4 pb-1"
				>
					{pinnedTabs.map((tab: ITab): JSX.Element => (
						<li key={tab.id}>
							<ExonTabsItem
								tab={tab}
								removeTabItem={removeTabItem}
							/>
						</li>
					))}
				</ul>
				<Reorder.Group
					ref={containerRef}
					axis="x"
					values={scrollableTabs}
					onReorder={updateTabs => setTabs([...pinnedTabs, ...updateTabs])}
					className="flex items-center gap-4 overflow-x-auto overflow-y-hidden customScrollExonTabs"
				>
					{scrollableTabs.map((tab: ITab): JSX.Element => (
						<ExonTabsItemMove key={tab.id} tab={tab} removeTabItem={removeTabItem}
							ref={el => el && tabsRef.current.set(tab.id.toString(), el)}
						/>
					))}
				</Reorder.Group>

				<div className="relative">
					<button
						className={classNames(
							"group relative flex items-center max-w-max text-center text-base py-2 px-4 select-none after:absolute after:top-0 after:left-0 after:w-full after:h-[2px] cursor-pointer",
						)}
						onClick={handleOpenDropDown}
					>
						{
							isOpenDropDown
								? <AiOutlineArrowUp />
								: <AiOutlineArrowDown />
						}

					</button>
					{isOpenDropDown && (
						<nav className="absolute top-full right-0 bg-slate-600 py-3 px-6">
							<ul className="">
								{hiddenTabs.map(tab => (
									<ExonTabsItem key={tab.id} tab={tab} removeTabItem={removeTabItem} />
								))}
							</ul>
						</nav>
					)}
				</div>
			</nav>
		</div>
	);
};
