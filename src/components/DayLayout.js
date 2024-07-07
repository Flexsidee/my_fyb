import { Carousel } from "@mantine/carousel";
import { Box, Group, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

import { Card } from "../components";

const DayLayout = ({ date, description, images, name }) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const smallScreen = useMediaQuery("(max-width: 586px)");

	return (
		<Box mt={"80px"}>
			<Fade bottom>
				<Group position="apart" align="center">
					<Text
						fw="bold"
						fz={smallScreen ? 18 : 24}
						mb="sm"
						color="main.3"
						tt="uppercase">
						<Text
							component="span"
							color="main.3"
							style={{ borderBottom: "3px black solid" }}>
							{name}
						</Text>
					</Text>
					<Text fw="bold" color="main.3" fz={smallScreen ? 16 : 20}>
						{date}
					</Text>
				</Group>
				<Text mb="md" color="main.3" fw="bold">
					{description}
				</Text>
				<Carousel
					align="start"
					breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
					loop
					slideGap="xl"
					slideSize="50%"
					slidesToScroll={mobile ? 1 : 2}
					withIndicators>
					{images.map((item) => (
						<Carousel.Slide key={item.title}>
							<Card {...item} />
						</Carousel.Slide>
					))}
				</Carousel>
			</Fade>
		</Box>
	);
};

export default DayLayout;
