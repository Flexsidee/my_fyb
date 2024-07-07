import { Box, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { About, Achievements, Days, Footer, Friends, Header } from "./modules";

const App = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	return (
		<Box>
			<Header />
			<Container pt={smallScreen ? 30 : 100}>
				<About />
			</Container>
			<Achievements />
			<Container py={smallScreen ? 50 : 100}>
				<Days />
			</Container>
			<Friends />
			<Footer />
		</Box>
	);
};

export default App;
