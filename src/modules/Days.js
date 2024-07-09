import { Box, Container, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

import { DayLayout } from "../components";

const fyp = [
	{
		id: 6,
		date: "19 Jun 2024",
		name: "Project Defense",
		description: `On this day, I presented my final year project (thesis) to a panel of lecturers and supervisors. It was a culmination of my hard work and dedication throughout the year. I am thrilled to share that I passed with flying colors.`,
		images: [
			{
				id: 1,
				imageUrl: "fyp-images/Day6-Defense/1.webp",
				category: "Project Defense",
			},
			{
				id: 2,
				imageUrl: "fyp-images/Day6-Defense/2.webp",
				category: "Project Defense",
			},
			{
				id: 3,
				imageUrl: "fyp-images/Day6-Defense/3.webp",
				category: "Project Defense",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day6-Defense/4.webp",
				category: "Project Defense",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day6-Defense/5.webp",
				category: "Project Defense",
			},
			{
				id: 6,
				imageUrl: "fyp-images/Day6-Defense/6.webp",
				category: "Project Defense",
			},
			{
				id: 7,
				imageUrl: "fyp-images/Day6-Defense/7.jpg",
				category: "Project Defense",
			},
			{
				id: 8,
				imageUrl: "fyp-images/Day6-Defense/8.webp",
				category: "Project Defense",
			},
			{
				id: 9,
				imageUrl: "fyp-images/Day6-Defense/9.jpg",
				category: "Project Defense",
			},
			{
				id: 10,
				imageUrl: "fyp-images/Day6-Defense/10.webp",
				category: "Project Defense",
			},
		],
	},
	{
		id: 1,
		date: "21 Jun 2024",
		name: "Old Money Dinner",
		description: `This event was a special themed dinner for the graduating set, with an "old money" theme. We dressed in classic, elegant styles reminiscent of bygone eras. It was a memorable evening filled with nostalgia and celebration.`,
		images: [
			{
				id: 1,
				imageUrl: "fyp-images/Day1-Dinner/1.webp",
				category: "Dinner",
			},
			{
				id: 2,
				imageUrl: "fyp-images/Day1-Dinner/2.webp",
				category: "Dinner",
			},
			{
				id: 3,
				imageUrl: "fyp-images/Day1-Dinner/3.webp",
				category: "Dinner",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day1-Dinner/4.webp",
				category: "Dinner",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day1-Dinner/5.webp",
				category: "Dinner",
			},
			{
				id: 6,
				imageUrl: "fyp-images/Day1-Dinner/6.jpg",
				category: "Dinner",
			},
			{
				id: 7,
				imageUrl: "fyp-images/Day1-Dinner/7.webp",
				category: "Dinner",
			},
			{
				id: 8,
				imageUrl: "fyp-images/Day1-Dinner/8.webp",
				category: "Dinner",
			},
		],
	},
	{
		id: 2,
		date: "04 Jul 2024",
		name: "Jersey Day",
		description: `Jersey Day was a fun-filled day where we wore jerseys representing our various halls of residence. The day was packed with sports activities, including track events and a spirited tug of war. It was a great way to showcase our hall pride and bond with fellow students.`,
		images: [
			{
				id: 2,
				imageUrl: "fyp-images/Day2-Jersey/2.webp",
				category: "Jersey",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day2-Jersey/5.webp",
				category: "Jersey",
			},
			{
				id: 1,
				imageUrl: "fyp-images/Day2-Jersey/1.webp",
				category: "Jersey",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day2-Jersey/4.webp",
				category: "Jersey",
			},
			{
				id: 3,
				imageUrl: "fyp-images/Day2-Jersey/3.webp",
				category: "Jersey",
			},
		],
	},
	{
		id: 3,
		date: "05 Jul 2024",
		name: "Ankara Luncheon",
		description: `The Ankara Luncheon was an event for final year students where we all dressed in vibrant Ankara fabric. It was a colorful and joyous occasion, celebrating our heritage and the journey we had undertaken together.`,
		images: [
			{
				id: 1,
				imageUrl: "fyp-images/Day3-Luncheon/1.webp",
				category: "Luncheon",
			},
			{
				id: 8,
				imageUrl: "fyp-images/Day3-Luncheon/8.webp",
				category: "Luncheon",
			},
			{
				id: 2,
				imageUrl: "fyp-images/Day3-Luncheon/2.webp",
				category: "Luncheon",
			},
			{
				id: 6,
				imageUrl: "fyp-images/Day3-Luncheon/6.webp",
				category: "Luncheon",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day3-Luncheon/4.webp",
				category: "Luncheon",
			},
			{
				id: 7,
				imageUrl: "fyp-images/Day3-Luncheon/7.jpg",
				category: "Luncheon",
			},
			{
				id: 9,
				imageUrl: "fyp-images/Day3-Luncheon/9.webp",
				category: "Luncheon",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day3-Luncheon/5.webp",
				category: "Luncheon",
			},
		],
	},
	// {
	// 	id: 4,
	// 	date: "25 July 2024",
	// 	name: "Sign Out Day",
	// 	description: `This day marked the end of my academic journey as I wrote my final exam. In line with the tradition in Nigerian universities, I wore a white shirt which my classmates signed as a memento. It was a bittersweet moment, filled with a sense of achievement and nostalgia.
	// 						`,
	// 	images: [
	// 		{
	// 			id: 1,
	// 			imageUrl: "fyp-images/Day4-Signout/1.jpg",
	// 			category: "Sign Out",
	// 		},
	// 	],
	// },
	// {
	// 	id: 5,
	// 	date: "28 July 2024",
	// 	name: "Thanksgiving Service",
	// 	description: `After completing all exams, we attended a special Thanksgiving service at church. It was a time to reflect on our journey and express our gratitude to God for His guidance and blessings throughout our time at the university.
	// 						`,
	// 	images: [
	// 		{
	// 			id: 1,
	// 			imageUrl: "fyp-images/Day5-Thanksgiving/1.jpg",
	// 			category: "Thanksgiving",
	// 		},
	// 	],
	// },
];

const Days = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	return (
		<Box id="timeline" py={smallScreen ? 50 : 100}>
			<Fade bottom>
				<Text
					align="center"
					fw="bold"
					fz={smallScreen ? 28 : 32}
					mt={60}
					color="blue"
					tt="uppercase">
					<Text component="span" style={{ borderBottom: "3px purple solid" }}>
						Final Year TimeLine
					</Text>
				</Text>
			</Fade>
			<Container mt="md">
				{fyp.map((day) => (
					<DayLayout
						date={day.date}
						description={day.description}
						images={day.images}
						key={day.id}
						name={day.name}
						number={day.id}
					/>
				))}
			</Container>
		</Box>
	);
};

export default Days;
