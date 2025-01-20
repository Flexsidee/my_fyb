import { Alert, Box, Container, Modal } from "@mantine/core";

import {
	About,
	Achievements,
	AppNavbar,
	Days,
	Footer,
	Friends,
	FuturePlan,
} from "./modules";
import { useEffect, useState } from "react";

const App = () => {
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpened(true);
		}, 3000); // 3 seconds delay

		return () => clearTimeout(timer); // Cleanup the timer on component unmount
	}, []);

	return (
		<Box>
			<AppNavbar />
			<main style={{ paddingTop: "60px" }}>
				<Container id="about">
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

			<Modal
				centered
				opened={opened}
				onClose={() => setOpened(false)}
				title="Please bear with me">
				<Alert
					title="The images may take a while to load. Thank you for your patience!"
					color="blue"></Alert>
			</Modal>
		</Box>
	);
};

export default App;
