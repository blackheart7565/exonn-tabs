import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { RootRoutes } from "./components/layouts/RootRoutes";

import "./styles/index.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<RootRoutes />
		</BrowserRouter>
	</StrictMode>,
);
