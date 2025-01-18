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
				category: "Samuel, Me, Kenny and Temi",
			},
			{
				id: 3,
				imageUrl: "fyp-images/Day6-Defense/3.webp",
				category: "Inioluwa and I",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day6-Defense/4.webp",
				category: "Me and Kenny",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day6-Defense/5.webp",
				category: "Timmy, Kachi, Eddie and I",
			},
			{
				id: 6,
				imageUrl: "fyp-images/Day6-Defense/6.webp",
				category: "Project Defense",
			},
			{
				id: 7,
				imageUrl: "fyp-images/Day6-Defense/7.jpg",
				category: "Me and Adesuwa",
			},
			{
				id: 8,
				imageUrl: "fyp-images/Day6-Defense/8.webp",
				category: "Project Defense",
			},
			{
				id: 9,
				imageUrl: "fyp-images/Day6-Defense/9.jpg",
				category: "Me and Sophie",
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
				category: "Me and Eddie",
			},
			{
				id: 3,
				imageUrl: "fyp-images/Day1-Dinner/3.webp",
				category: "Me and Precious",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day1-Dinner/4.webp",
				category: "Me, Deolu, Ehis, Chris, Camsy and Kenny",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day1-Dinner/5.webp",
				category: "Dinner",
			},
			{
				id: 6,
				imageUrl: "fyp-images/Day1-Dinner/6.jpg",
				category: "Timi, Me and Favour",
			},
			{
				id: 7,
				imageUrl: "fyp-images/Day1-Dinner/7.webp",
				category: "Dinner",
			},
			{
				id: 8,
				imageUrl: "fyp-images/Day1-Dinner/8.webp",
				category: "Sophie and I",
			},
			{
				id: 9,
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722528154/IMG_9191_rm99vh.jpg",
				category: "Chinwe, Timi, Feke, Taiwo, Kehinde, Eddie and Briannah",
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
				category: "Me and Dalamu",
			},
			{
				id: 1,
				imageUrl: "fyp-images/Day2-Jersey/1.webp",
				category: "Jersey",
			},
			{
				id: 4,
				imageUrl: "fyp-images/Day2-Jersey/4.webp",
				category: "Me and Green",
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
				category: "Paul, Me, Fikayo, Kolade and Dalamu",
				categoryColor: "Purple",
			},
			{
				id: 2,
				imageUrl: "fyp-images/Day3-Luncheon/2.webp",
				category: "Luncheon",
			},
			{
				id: 7,
				imageUrl: "fyp-images/Day3-Luncheon/7.jpg",
				category: "Me and Kolade",
			},
			{
				id: 6,
				imageUrl: "fyp-images/Day3-Luncheon/6.webp",
				category: "Luncheon",
			},
			{
				id: 9,
				imageUrl: "fyp-images/Day3-Luncheon/9.webp",
				category: "Me and Sophie",
			},
			{
				id: 5,
				imageUrl: "fyp-images/Day3-Luncheon/5.webp",
				category: "Luncheon",
			},
		],
	},
	{
		id: 4,
		date: "25 July 2024",
		name: "Sign Out Day",
		description: `This day marked the end of my academic journey as I wrote my final exam. In line with the tradition in Nigerian universities, I wore a white shirt which my classmates signed as a memento. It was a bittersweet moment, filled with a sense of achievement and nostalgia.
							`,
		images: [
			{
				id: 1,
				imageUrl: "signout/me1.webp",
				category: "Sign Out",
			},
			{
				id: 2,
				imageUrl: "signout/osi.jpeg",
				category: "Osinachi Ameashi",
				categoryColor: "blue.9",
			},

			{
				id: 3,
				imageUrl: "signout/group1.jpeg",
				category: "Mena, Ebuka, Sherif, Pablo, etc",
				categoryColor: "blue.9",
			},
			{
				id: 4,
				imageUrl: "signout/kenny.webp",
				category: "Salami Kehinde",
			},
			{
				id: 5,
				imageUrl: "signout/group8.webp",
				category: "Kenny, Bazz, Me and Kolade",
				categoryColor: "blue.9",
			},
			{
				id: 6,
				imageUrl: "signout/flyn.jpeg",
				category: "Abu David Flyn",
				categoryColor: "blue.9",
			},
			{
				id: 7,
				imageUrl: "signout/group2.jpeg",
				category: "Caleb, Francis, Divine, Annie, Bolu, Collins, etc",
				categoryColor: "red.5",
			},
			{
				id: 8,
				imageUrl: "signout/derin.jpeg",
				category: "Eyinade Aderinsola",
				categoryColor: "red.8",
			},
			{
				id: 10,
				imageUrl: "signout/jeff.webp",
				category: "Jefferson",
			},
			{
				id: 11,
				imageUrl: "signout/group3.webp",
				category: "Kenny, and Fiyin",
			},
			{
				id: 12,
				imageUrl: "signout/sophie.webp",
				category: "George Sophie",
			},
			{
				id: 13,
				imageUrl: "signout/group4.jpg",
				category: "Chisom, Precious, Daniel, Me and Tobi",
			},
			{
				id: 14,
				imageUrl: "signout/caleb.jpeg",
				category: "Udom Caleb",
				categoryColor: "red.9",
			},
			{
				id: 15,
				imageUrl: "signout/group5.webp",
				category: "Mena, Divine, Me and Jeff",
			},
			{
				id: 16,
				imageUrl: "signout/tumi.webp",
				category: "Alaran Tunmininu",
			},
			{
				id: 17,
				imageUrl: "signout/group6.jpeg",
				category: "Divine, Bolu, Flyn, etc",
			},
			{
				id: 18,
				imageUrl: "signout/debola.jpeg",
				category: "Omooba Adebola",
			},
			{
				id: 19,
				imageUrl: "signout/group7.jpeg",
				category: "Sign Out",
			},
			{
				id: 20,
				imageUrl: "signout/archi.webp",
				category: "Archi",
				categoryColor: "blue.9",
			},
			{
				id: 22,
				imageUrl: "signout/briannah.webp",
				category: "Nwanko Briannah",
			},
			{
				id: 21,
				imageUrl: "signout/daniel.jpeg",
				category: "Edomani Daniel",
			},
			{
				id: 23,
				imageUrl: "signout/me2.webp",
				category: "Sign Out",
			},
		],
	},
	{
		id: 5,
		date: "28 July 2024",
		name: "Thanksgiving Service",
		description: `After completing all exams, we attended a special Thanksgiving service at church. It was a time to reflect on our journey and express our gratitude to God for His guidance and blessings throughout our time at the university.
							`,
		images: [
			{
				id: 1,
				imageUrl: "thanksgiving/me1.webp",
				category: "Thanksgiving",
			},
			{
				id: 6,
				imageUrl: "thanksgiving/azeez.webp",
				category: "Azeez Daniel",
			},
			{
				id: 4,
				imageUrl: "thanksgiving/group1.webp",
				category: "Faithful, Caleb, Shiloh, Ifeanyi, Mena, Ebuka",
			},
			{
				id: 2,
				imageUrl: "thanksgiving/me2.webp",
				category: "Thanksgiving",
			},
			{
				id: 8,
				imageUrl: "thanksgiving/chinwe.webp",
				category: "Amadu Chinwedu",
			},
			{
				id: 5,
				imageUrl: "thanksgiving/group2.webp",
				category: "Temi, Fiyin, Roy, Bazz, Kenny, Shiloh and Mena",
			},
			{
				id: 3,
				imageUrl: "thanksgiving/me3.webp",
				category: "Thanksgiving",
			},
			{
				id: 21,
				imageUrl: "thanksgiving/tunmise.webp",
				category: "Ogunniyi Tunmise",
				categoryColor: "red.9",
			},
			{
				id: 19,
				imageUrl: "thanksgiving/sophie.webp",
				category: "Jibola and Sophie",
			},
			{
				id: 9,
				imageUrl: "thanksgiving/feke.jpeg",
				category: "Alao-Peters Feke",
			},
			{
				id: 10,
				imageUrl: "thanksgiving/gloria.webp",
				category: "Idowu Gloria",
			},
			{
				id: 11,
				imageUrl: "thanksgiving/ifeanyi.webp",
				category: "Aladi Ifeanyi",
			},
			{
				id: 12,
				imageUrl: "thanksgiving/jed.webp",
				category: "Jed",
			},
			{
				id: 13,
				imageUrl: "thanksgiving/jibola.webp",
				category: "Ajibola Salami",
			},
			{
				id: 14,
				imageUrl: "thanksgiving/kachi.webp",
				category: "Joshua, Kachi and Dolamu",
			},
			{
				id: 15,
				imageUrl: "thanksgiving/kenny.jpeg",
				category: "Salami Kehinde",
			},
			{
				id: 16,
				imageUrl: "thanksgiving/lekan.webp",
				category: "Lekan",
			},
			{
				id: 17,
				imageUrl: "thanksgiving/precious.webp",
				category: "Precious Ihunaya",
			},
			{
				id: 18,
				imageUrl: "thanksgiving/roy.webp",
				category: "Udom Roy",
			},
			{
				id: 20,
				imageUrl: "thanksgiving/temi.webp",
				category: "Abiodun Temidayo",
			},

			{
				id: 22,
				imageUrl: "thanksgiving/veronica.webp",
				category: "Ejeh Veronica",
			},
			{
				id: 23,
				imageUrl: "thanksgiving/victoria.webp",
				category: "Ajibola Victoria",
			},
			{
				id: 24,
				imageUrl: "thanksgiving/victory.webp",
				category: "Okenwa Victory",
			},
			{
				id: 7,
				imageUrl: "thanksgiving/caleb.webp",
				category: "Emelu Caleb",
			},
			{
				id: 25,
				imageUrl: "thanksgiving/me4.webp",
				category: "Thanksgiving",
			},
		],
	},
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
			<Container mt="md" px={0}>
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
