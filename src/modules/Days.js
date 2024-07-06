import { Box, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { DayLayout } from "../components";

const Days = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");

	const fyp = [
		{
			id: 6,
			date: "19 Jun 2024",
			name: "Project Defense",
			description: `On this day, I presented my final year project (thesis) to a panel of lecturers and supervisors. It was a culmination of my hard work and dedication throughout the year. I am thrilled to share that I passed with flying colors.`,
			images: [
				{
					id: 1,
					imageUrl: "fyp-images/Day6-Defense/1.jpg",
					category: "Project Defense",
				},
				{
					id: 2,
					imageUrl: "fyp-images/Day6-Defense/2.jpg",
					category: "Project Defense",
				},
				{
					id: 3,
					imageUrl: "fyp-images/Day6-Defense/3.jpg",
					category: "Project Defense",
				},
				{
					id: 4,
					imageUrl: "fyp-images/Day6-Defense/4.jpg",
					category: "Project Defense",
				},
				{
					id: 5,
					imageUrl: "fyp-images/Day6-Defense/5.jpg",
					category: "Project Defense",
				},
				{
					id: 6,
					imageUrl: "fyp-images/Day6-Defense/6.jpg",
					category: "Project Defense",
				},
				{
					id: 7,
					imageUrl: "fyp-images/Day6-Defense/7.jpg",
					category: "Project Defense",
				},
				{
					id: 8,
					imageUrl: "fyp-images/Day6-Defense/8.jpg",
					category: "Project Defense",
				},
				{
					id: 9,
					imageUrl: "fyp-images/Day6-Defense/9.jpg",
					category: "Project Defense",
				},
				{
					id: 10,
					imageUrl: "fyp-images/Day6-Defense/10.jpg",
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
					imageUrl: "fyp-images/Day1-Dinner/1.jpg",
					category: "Dinner",
				},
				{
					id: 2,
					imageUrl: "fyp-images/Day1-Dinner/2.jpg",
					category: "Dinner",
				},
				{
					id: 3,
					imageUrl: "fyp-images/Day1-Dinner/3.jpg",
					category: "Dinner",
				},
				{
					id: 4,
					imageUrl: "fyp-images/Day1-Dinner/4.jpg",
					category: "Dinner",
				},
				{
					id: 5,
					imageUrl: "fyp-images/Day1-Dinner/5.jpg",
					category: "Dinner",
				},
				{
					id: 6,
					imageUrl: "fyp-images/Day1-Dinner/6.jpg",
					category: "Dinner",
				},
				{
					id: 7,
					imageUrl: "fyp-images/Day1-Dinner/7.jpg",
					category: "Dinner",
				},
				{
					id: 8,
					imageUrl: "fyp-images/Day1-Dinner/8.jpg",
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
					id: 1,
					imageUrl: "fyp-images/Day2-Jersey/1.jpeg",
					category: "Jersey",
				},
				{
					id: 2,
					imageUrl: "fyp-images/Day2-Jersey/2.jpeg",
					category: "Jersey",
				},
				{
					id: 3,
					imageUrl: "fyp-images/Day2-Jersey/3.jpeg",
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
					imageUrl: "fyp-images/Day3-Luncheon/1.jpg",
					category: "Luncheon",
				},
				{
					id: 2,
					imageUrl: "fyp-images/Day3-Luncheon/2.jpg",
					category: "Luncheon",
				},
				{
					id: 3,
					imageUrl: "fyp-images/Day3-Luncheon/3.jpg",
					category: "Luncheon",
				},
				{
					id: 4,
					imageUrl: "fyp-images/Day3-Luncheon/4.jpg",
					category: "Luncheon",
				},
				{
					id: 5,
					imageUrl: "fyp-images/Day3-Luncheon/5.jpg",
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

	return (
		<Box bg="main.0" pb={50} pt={smallScreen ? 20 : 50}>
			<Container>
				{fyp.map((day) => (
					<DayLayout
						date={day.date}
						description="On this day, I presented my final year project (thesis) to a panel of lecturers and supervisors. It was a culmination of my hard work and dedication throughout the year. I am thrilled to share that I passed with flying colors."
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
