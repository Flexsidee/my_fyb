import { Box, Container, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

import { DayLayout } from "../components";

const appreciations = [
	{
		id: 1,
		name: "Family",
		description: `A special thanks to my family for their unconditional love and support. Your belief in me has been my greatest strength.`,
		images: [
			{
				id: 1,
				category: "Dad, Sis and Nephew",
				imageUrl: "/family/1.jpg",
			},
			{
				id: 2,
				category: "Brother, Sister, Niece and Mum",
				imageUrl: "/family/2.jpg",
			},
		],
	},
	{
		id: 2,
		name: "Lecturers and Mentors",
		description: `I extend my deepest gratitude to all my professors and mentors for their guidance, wisdom, and encouragement. Your dedication to teaching and passion for knowledge have profoundly shaped my academic journey.
		Special thanks (in no particular order): Dr. Adeniyi Akanni, Dr. Emmanuel Ajulo, Dr. P Oduroye, Dr. Rasheed Ojo, Dr. Olanipekun, Dr. Olumoye, Dr. Adesanya, Dr. Akinrotimi, Dr. Odugbesan, Mr Daniel, Mr Jide, Mr Olaoye, Mr Oloko, Mrs Ajilore, and others`,
		images: [
			{
				id: 1,
				category: "Dr Emmanuel Ajulo",
				imageUrl: "/lecturers/1.jpg",
			},
			{
				id: 2,
				category: "Dr Adeniyi Akanni",
				imageUrl: "/lecturers/2.jpg",
			},
			{
				id: 3,
				category: "Dr Peter Oduroye",
				imageUrl: "/lecturers/3.jpg",
			},
		],
	},
	{
		id: 3,
		name: "Fieldbase Services Limited",
		description: `Fieldbase Services Limited, thank you for providing a professional environment where I could grow and apply my skills. Special thanks to the Managing Director, Mr. Chinedu Abanobi, the Head of Department, Mr. Awolere Adeleke, and all other colleagues. Your support and collaboration, and the opportunity to work for Fieldbase while studying, have been invaluable.`,
		images: [
			{
				id: 1,
				category: "Fieldbase Team at NOG",
				imageUrl: "/fbase/1.jpg",
			},
			{
				id: 2,
				category: "Fieldbase Lagos Team Hangout",
				imageUrl: "/fbase/2.jpg",
			},
		],
	},
	{
		id: 4,
		name: "Friends and Classmates",
		description: `To my friends and classmates, your camaraderie, study sessions, and shared experiences have made this journey unforgettable. Below is a carousel of some of the amazing friends and classmates who have been part of this journey, in addition to the rest of the pictures showcased at other section.`,
		images: [
			{
				id: 1,
				category: "Chisom, Malina & Ayo",
				imageUrl: "/friends/1.jpg",
			},
			{
				id: 2,
				category: "Tunmise Ogunniyi",
				imageUrl: "/friends/2.jpg",
			},
			{
				id: 3,
				category: "Ifeanyi, Elizabeth & Isreal",
				imageUrl: "/friends/3.jpg",
			},
			{
				id: 4,
				category: "Osinachi Ameashi",
				imageUrl: "/friends/4.jpg",
			},
			{
				id: 5,
				category: "John, Joshua & Isreal",
				imageUrl: "/friends/5.jpg",
			},
			{
				id: 6,
				category: "Temi Abiodun",
				imageUrl: "/friends/6.jpg",
			},
			{
				id: 7,
				category: "Kenny, Bundo",
				imageUrl: "/friends/7.jpg",
			},
			{
				id: 8,
				category: "Enoch",
				imageUrl: "/friends/8.jpg",
			},
			{
				id: 9,
				category: "Ifeanyi, Fiyin, Shile & Opara",
				imageUrl: "/friends/9.jpg",
			},
			{
				id: 10,
				category: "Dolapo Oyesola",
				imageUrl: "/friends/10.jpg",
			},
			{
				id: 11,
				category: "Shiloh & Fortune",
				imageUrl: "/friends/11.jpg",
			},
			{
				id: 12,
				category: "Caleb Emelu",
				imageUrl: "/friends/12.jpg",
			},
			{
				id: 13,
				category: "CAVEIR Team",
				imageUrl: "/friends/13.jpg",
			},
			{
				id: 14,
				category: "Samuel Ogunlusi",
				imageUrl: "/friends/14.jpg",
			},
			{
				id: 15,
				category: "Timmy and John",
				imageUrl: "/friends/15.jpg",
			},
		],
	},
	{
		id: 5,
		name: "Girlfriend",
		description: `To my wonderful girlfriend, Aminat, your unwavering support, love, and encouragement have been a constant source of strength for me. Thank you for being by my side through all the highs and lows.`,
		images: [
			{
				id: 1,
				category: "",
				imageUrl: "/gf/1.jpg",
			},
			{
				id: 2,
				category: "",
				imageUrl: "/gf/2.jpg",
			},
			{
				id: 3,
				category: "",
				imageUrl: "/gf/3.jpg",
			},
			{
				id: 3,
				category: "",
				imageUrl: "/gf/4.jpg",
			},
		],
	},
];

const Friends = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");

	return (
		<Box>
			<Fade bottom>
				<Text
					align="center"
					fw="bold"
					fz={smallScreen ? 28 : 32}
					mb="md"
					color="blue"
					tt="uppercase">
					<Text component="span" style={{ borderBottom: "3px purple solid" }}>
						Appreciation
					</Text>
				</Text>
			</Fade>
			<Container>
				<Fade bottom>
					<Text ta="justify">
						Throughout my journey at Caleb University, I have been fortunate to
						meet incredible individuals who have supported and inspired me. This
						section is dedicated to acknowledging and appreciating those who
						have made a significant impact on my academic and personal growth.
					</Text>
				</Fade>
				<Box>
					{appreciations.map((appreciation) => (
						<DayLayout
							key={appreciation.id}
							description={appreciation.description}
							name={appreciation.name}
							images={appreciation.images}
						/>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Friends;
