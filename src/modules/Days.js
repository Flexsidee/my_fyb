import { Box } from "@mantine/core";

import { DayLayout } from "../components";

const Days = () => {
	const fyp = [
		{
			id: 6,
			date: "19 Jun 2024",
			name: "Project Defense",
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
		<Box>
			{fyp.map((day) => (
				<DayLayout
					date={day.date}
					images={day.images}
					key={day.id}
					name={day.name}
					number={day.id}
				/>
			))}
		</Box>
	);
};

export default Days;
