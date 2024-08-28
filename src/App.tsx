import React from "react";

import "./App.scss";

interface IAppProps { }

export const App: React.FC<IAppProps> = (): JSX.Element => {
	return (
		<div className="app">
			App
		</div>
	)
}