/* eslint-disable @typescript-eslint/no-empty-object-type */

import { forwardRef, useState } from "react";
import { useMotionValue, Reorder } from "framer-motion";

import { useRaisedShadow } from "../../../hooks/useRaisedShadow";
import { ExonTabsItem } from "./ExonTabsItem";

import type { IExonTabs } from "../../../types/exonTabs";

interface IExonTabsItemMoveProps extends IExonTabs { }

export const ExonTabsItemMove = forwardRef<HTMLLIElement, IExonTabsItemMoveProps>(({
	tab,
	removeTabItem,
}, ref): JSX.Element => {
	const x = useMotionValue(0);
	const boxShadow = useRaisedShadow(x);

	const [dragging, setDragging] = useState<boolean>(false);

	const handleDragStart = (): void => setDragging(true);
	const handleDragEnd = (): void => setDragging(false);

	return (
		<Reorder.Item
			ref={ref}
			value={tab}
			id={tab.id.toString()}
			style={{ boxShadow, x }}
			className="shrink-0 relative"
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			data-id={tab.id.toString()}
		>
			<ExonTabsItem tab={tab} dragging={dragging} removeTabItem={removeTabItem} />
			<div className="absolute top-full left-0  py-2 px-5 bg-slate-600"></div>
		</Reorder.Item >
	);
});
