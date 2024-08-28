import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IHomeProps { }

export const Home: React.FC<IHomeProps> = (): JSX.Element => {
	return (
		<div className="home">
			<div className="container mx-auto">
				Home
			</div>
		</div>
	);
};