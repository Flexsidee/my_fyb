// import { Box, Image } from "@mantine/core";
// import { Carousel } from "@mantine/carousel";

import { Zoom } from "react-reveal";

import { Slideshow } from "../components";

const images = [
	{
		id: 1,
		imageUrl: "fyp-images/Day6-Defense/1.jpg",
		category: "Project Defense",
	},
	{
		id: 2,
		imageUrl: "fyp-images/Day1-Dinner/1.jpg",
		caption: "Old Money Dinner",
	},
	{
		id: 3,
		imageUrl: "fyp-images/Day2-Jersey/2.jpeg",
		caption: "Jersey Day",
	},
	{
		id: 4,
		imageUrl: "fyp-images/Day3-Luncheon/5.jpg",
		caption: "Ankara Luncheon",
	},
	// {
	// 	id: 5,
	// 	imageUrl: "fyp-images/Day4-Signout/1.jpg",
	// 	category: "Sign Out",
	// },
	// {
	// 	id: 6,
	// 	imageUrl: "fyp-images/Day5-Thanksgiving/1.jpg",
	// 	category: "Thanksgiving Service",
	// },
];

const Header = () => {
	return (
		<>
			<Zoom>
				{/* <Box style={{ maxHeight: "100vh", display: "flex" }}>
				<Carousel
					mx="auto"
					height="100%"
					inViewThreshold="0.2"
					withIndicators
					loop
				>
					{images.map((image) => (
						<Carousel.Slide key={image.id}>
							<Image src={image.imageUrl} />
						</Carousel.Slide>
					))}
				</Carousel>
			</Box> */}
				<Slideshow slides={images} />;
			</Zoom>
		</>
	);
};

export default Header;
