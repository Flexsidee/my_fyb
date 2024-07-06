import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Box, Text, useMantineTheme } from "@mantine/core";
import { Fade } from "react-reveal";

import { Card } from "../components";

const DayLayout = ({ date, images, name }) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	return (
		<Box mt={"80px"}>
			<Fade bottom>
				<Text fw="bold" fz={30} mb="md" color="blue" tt="uppercase">
					<Text component="span" style={{ borderBottom: "3px purple solid" }}>
						{name}
					</Text>
				</Text>
				<Carousel
					align="start"
					breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
					loop
					slideGap="xl"
					slideSize="50%"
					slidesToScroll={mobile ? 1 : 2}
					withIndicators
				>
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
