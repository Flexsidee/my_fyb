import { Box, Container, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

const FuturePlan = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	return (
		<Box bg="main.0" py={smallScreen ? 20 : 80} id="future-plan">
			<Fade bottom>
				<Text
					align="center"
					fw="bold"
					fz={smallScreen ? 28 : 32}
					mb="md"
					mt={60}
					color="blue"
					tt="uppercase">
					<Text component="span" style={{ borderBottom: "3px purple solid" }}>
						Future Plan
					</Text>
				</Text>
			</Fade>
			<Container>
				<Fade>
					<Text>
						As I look forward to the next chapter of my life, I am filled with
						excitement and determination. My journey at Caleb University has
						equipped me with the skills and experiences necessary to pursue my
						aspirations, and I am eager to embark on new challenges and
						opportunities.
					</Text>
				</Fade>
				<Box mt="md">
					<Text
						fw="bold"
						fz={smallScreen ? 18 : 24}
						mb="sm"
						color="main.3"
						tt="capitilize">
						<Text
							component="span"
							color="main.3"
							style={{ borderBottom: "3px black solid" }}>
							Career Aspirations
						</Text>
					</Text>
					<Text>
						After graduation, my immediate plan is to return to Fieldbase
						Services Limited, where I will work full-time and continue to
						develop my skills as a software developer. When the time comes, I
						will participate in the National Youth Service Corps (NYSC) for one
						year, contributing my skills to community development.
					</Text>
					<Text mt="xs">
						In terms of my career, I aim to become a full-stack web developer
						and eventually a mobile developer. My long-term goals include diving
						into advanced fields such as Artificial Intelligence (AI) and the
						Internet of Things (IoT), which I believe will shape the future of
						technology.
					</Text>
				</Box>
				<Box mt="md">
					<Text
						fw="bold"
						fz={smallScreen ? 18 : 24}
						mb="sm"
						color="main.3"
						tt="capitilize">
						<Text
							component="span"
							color="main.3"
							style={{ borderBottom: "3px black solid" }}>
							Further Education
						</Text>
					</Text>
					<Text>
						I am considering pursuing a Master’s degree (MSc) to deepen my
						expertise, though I haven't finalized my plans yet. Continuous
						learning is essential in the tech industry, and I am committed to
						staying at the forefront of technological advancements.
					</Text>
				</Box>
				<Box mt="md">
					<Text
						fw="bold"
						fz={smallScreen ? 18 : 24}
						mb="sm"
						color="main.3"
						tt="capitilize">
						<Text
							component="span"
							color="main.3"
							style={{ borderBottom: "3px black solid" }}>
							Personal Development
						</Text>
					</Text>
					<Text>
						Beyond my professional goals, I am dedicated to personal growth. I
						plan to advance from a recreational runner to an advanced runner,
						participating in more competitive events. Additionally, I aspire to
						revive my passion for tailoring by making clothes for people again
						or even establishing my own fashion house. If possible, I also hope
						to model someday, despite my height of 5 feet 9 inches.
					</Text>
				</Box>
			</Container>
		</Box>
	);
};

export default FuturePlan;
