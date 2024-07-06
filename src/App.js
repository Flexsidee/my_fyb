import { Box, Container } from "@mantine/core";

import { About, Achievements, Days, Events, Footer, Header } from "./modules";
import { useMediaQuery } from "@mantine/hooks";

const App = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	return (
		<Box>
			<Header />
			<Container pt={smallScreen ? 50 : 100}>
				<About />
			</Container>
			<Events />
			<Container pb={smallScreen ? 50 : 100}>
				<Days />
			</Container>
			<Container pb={smallScreen ? 50 : 100}>
				<Achievements />
			</Container>
			<Footer />
		</Box>
	);
};

export default App;
