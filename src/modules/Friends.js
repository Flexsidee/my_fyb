import { Carousel } from "@mantine/carousel";
import { Box, Container, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";
import { Card } from "../components";

const friends = [
	{
		id: 1,
		name: "",
		imageUrl: "/friends/1.jpg",
	},
	{
		id: 2,
		name: "",
		imageUrl: "/friends/2.jpg",
	},
	{
		id: 3,
		name: "",
		imageUrl: "/friends/3.jpg",
	},
	{
		id: 4,
		name: "",
		imageUrl: "/friends/4.jpg",
	},
	{
		id: 5,
		name: "",
		imageUrl: "/friends/5.jpg",
	},
	{
		id: 6,
		name: "",
		imageUrl: "/friends/6.jpg",
	},
	{
		id: 7,
		name: "",
		imageUrl: "/friends/7.jpg",
	},
	{
		id: 8,
		name: "",
		imageUrl: "/friends/8.jpg",
	},
	{
		id: 9,
		name: "",
		imageUrl: "/friends/9.jpg",
	},
	{
		id: 10,
		name: "",
		imageUrl: "/friends/10.jpg",
	},
	{
		id: 11,
		name: "",
		imageUrl: "/friends/11.jpg",
	},
	{
		id: 12,
		name: "",
		imageUrl: "/friends/12.jpg",
	},
	{
		id: 13,
		name: "",
		imageUrl: "/friends/13.jpg",
	},
	{
		id: 14,
		name: "",
		imageUrl: "/friends/14.jpg",
	},
	{
		id: 15,
		name: "",
		imageUrl: "/friends/15.jpg",
	},
];
const Friends = () => {
	const theme = useMantineTheme();
	const smallScreen = useMediaQuery("(max-width: 586px)");
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	return (
		<Box bg="main.0" py={smallScreen ? 20 : 80}>
			<Fade bottom>
				<Text
					align="center"
					fw="bold"
					fz={smallScreen ? 28 : 32}
					mb="md"
					color="blue"
					tt="uppercase">
					<Text component="span" style={{ borderBottom: "3px purple solid" }}>
						Friend I Met
					</Text>
				</Text>
			</Fade>
			<Container>
				<Text ta="justify">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
					explicabo! Praesentium hic nemo similique dolor magni, recusandae
					commodi atque veritatis quidem mollitia iure sequi voluptatibus unde
					accusamus repudiandae architecto officiis! Optio debitis laboriosam,
					culpa fuga vero quae esse at voluptatibus?
				</Text>
				<Box mt="sm">
					<Fade bottom>
						<Carousel
							align="start"
							breakpoints={[{ maxWidth: "md", slideSize: "100%", slideGap: 2 }]}
							loop
							slideGap="xl"
							slideSize="50%"
							slidesToScroll={mobile ? 1 : 2}
							withIndicators>
							{friends.map((friend) => (
								<Carousel.Slide key={friend.id}>
									<Card imageUrl={friend.imageUrl} category={friend.name} />
								</Carousel.Slide>
							))}
						</Carousel>
					</Fade>
				</Box>
			</Container>
		</Box>
	);
};

export default Friends;
