import { Box, Container } from "@mantine/core";

import {
	About,
	Achievements,
	AppNavbar,
	Days,
	Footer,
	Friends,
	FuturePlan,
} from "./modules";

const App = () => {
	return (
		<Box>
			<AppNavbar />
			<main style={{ paddingTop: "60px" }}>
				<Container pt={50} id="about">
					<About />
				</Container>
				<Achievements />
				<Container>
					<Days />
				</Container>
				<FuturePlan />
				<Container>
					<Friends />
				</Container>
			</main>
			<Footer />
		</Box>
	);
};

export default App;
