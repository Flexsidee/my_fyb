import { Box, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { About, Achievements, Days, Footer, Header } from "./modules";

const App = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	return (
		<Box>
			<Header />
			<Container pt={smallScreen ? 30 : 100}>
				<About />
			</Container>
			<Days />
			<Container py={smallScreen ? 50 : 100}>
				<Achievements />
			</Container>
			<Footer />
		</Box>
	);
};

export default App;
