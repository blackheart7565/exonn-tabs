import { useEffect, useState } from "react";

interface IWindowWidthReturn {
	windowWidth: number;
}

export const getWindowWidth = (): IWindowWidthReturn => {
	const { innerWidth: windowWidth } = typeof window !== "undefined" ? window : { innerWidth: 0 };

	return { windowWidth };
};


export const useWindowWidth = (): {
	windowWidth: IWindowWidthReturn;
	handleResize: () => void;
} => {
	const [windowWidth, setWindowWidth] = useState<IWindowWidthReturn>(getWindowWidth());

	const handleResize = (): void => setWindowWidth(getWindowWidth());

	useEffect((): () => void => {
		window.addEventListener("resize", handleResize, true);
		return () => {
			window.removeEventListener("resize", handleResize, true);
		};
	}, []);

	return {
		windowWidth,
		handleResize,
	};
};

export const useMediaQuery = (maxWidth: number): boolean => {
	const {
		windowWidth: { windowWidth },
		handleResize,
	} = useWindowWidth();
	const [isMedia, setIsMedia] = useState<boolean>(false);

	useEffect(() => {
		if (windowWidth <= maxWidth) {
			setIsMedia(true);
		} else {
			setIsMedia(false);
		}
	}, [handleResize, maxWidth, windowWidth]);

	return isMedia;
};