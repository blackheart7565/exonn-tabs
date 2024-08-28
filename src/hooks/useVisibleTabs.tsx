import { MutableRefObject, useEffect, useRef, useState } from "react";

import type { ITab } from "../types/exonTabs";

export const useVisibleTabs = <TContainer extends Element, TItem extends Element>(containerRef: MutableRefObject<TContainer | null>, tabs: ITab[]) => {
	const [visibleTabs, setVisibleTabs] = useState<ITab[]>([]);
	const [hiddenTabs, setHiddenTabs] = useState<ITab[]>([]);
	const tabsRef = useRef<Map<string, TItem>>(new Map());

	useEffect((): (() => void) | void => {

		const containerElement = containerRef.current;
		if (!containerElement) return;

		const observer = new IntersectionObserver((entries): void => {
			const visibleTabIds: Set<string> = new Set<string>();

			entries.forEach((entry): void => {
				if (entry.isIntersecting) {
					const tabId = (entry.target as TItem).getAttribute("data-id");

					if (entry.isIntersecting && tabId) {
						visibleTabIds.add(tabId);
					}
				}
			});

			const visibleTabs = tabs.filter(tab => visibleTabIds.has(tab.id.toString()));
			const hiddenTabs = tabs.filter(tab => !visibleTabIds.has(tab.id.toString()));

			setVisibleTabs(visibleTabs);
			setHiddenTabs(hiddenTabs);
		}, {
			root: containerElement,
			threshold: 0.5,
		});

		const observeTabs = () => {
			tabs.forEach((tab) => {
				const tabElement = tabsRef.current.get(tab.id.toString());
				if (tabElement) {
					observer.observe(tabElement);
				}
			});
		};

		observeTabs();

		return () => {
			tabs.forEach((tab) => {
				const tabElement = tabsRef.current.get(tab.id.toString());
				if (tabElement) {
					observer.unobserve(tabElement);
				}
			});
		};
	}, [containerRef, tabs]);


	return {
		visibleTabs,
		hiddenTabs,
		containerRef,
		tabsRef,
	};
};