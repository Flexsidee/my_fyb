import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import "./index.css";
import App from "./App";
import { CustomFonts } from "./components";

const theme = {
	fontFamily: "Core Sans C",
	fontFamilyMonospace: "Core Sans C",
	headings: { fontFamily: "Core Sans C" },

	components: {
		Text: {
			defaultProps: {
				color: "main.4",
				// fontSize: "xl",
			},
		},
	},

	colors: {
		main: ["#EFF8E2", "#CECFC7", "#ADA8B6", "#573280", "#23022E"],
		greey: ["#E5E5E5", "#71737A", "#4A678B"],
	},
	primaryColor: "main",
	primaryShade: 4,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
			<CustomFonts />
			<App />
		</MantineProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
