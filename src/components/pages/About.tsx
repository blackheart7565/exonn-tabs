import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IAboutProps { }

export const About: FC<IAboutProps> = (): JSX.Element => {
	return (
		<div className="about">
			<div className="container mx-auto">
				About
			</div>
		</div>
	);
};