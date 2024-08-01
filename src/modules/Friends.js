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
				id: 4,
				// imageUrl: "thanksgiving/family.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722523840/family_r0ehfm.webp",
				category: "Thanksgiving",
			},
			{
				id: 2,
				category: "Brother, Sister, Niece and Mum",
				// imageUrl: "/family/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269784/2_gwevgn.webp",
			},
			{
				id: 3,
				category: "The Ahmeds",
				// imageUrl: "/family/3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269784/3_hqnw5w.webp",
			},
			{
				id: 1,
				category: "Dad, Sis and Nephew",
				// imageUrl: "/family/1.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269786/1_pche1n.jpg",
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
				// imageUrl: "/lecturers/1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269946/1_tqaxia.webp",
			},
			{
				id: 2,
				category: "Dr Adeniyi Akanni",
				// imageUrl: "/lecturers/4.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269948/4_ak9ojb.jpg",
			},
			{
				id: 3,
				category: "Dr Peter Oduroye",
				// imageUrl: "/lecturers/3.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269945/3_n3zcnw.jpg",
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
				// imageUrl: "/fbase/1.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269857/1_hszdxx.jpg",
			},
			{
				id: 2,
				category: "Fieldbase Lagos Team Hangout",
				// imageUrl: "/fbase/2.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269857/2_t0vmig.jpg",
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
				// imageUrl: "/friends/1.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269895/1_a24it1.jpg",
			},
			{
				id: 2,
				category: "Tunmise Ogunniyi",
				// imageUrl: "/friends/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269882/2_p4qmn0.webp",
			},
			{
				id: 3,
				category: "Ifeanyi, Elizabeth & Isreal",
				// imageUrl: "/friends/3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721342587/9563089D-D2C8-4EE0-907F-133022F627F8_1_105_c_yvasye.jpg",
			},
			{
				id: 5,
				category: "John, Joshua, Dolamu & Isreal",
				// imageUrl: "/friends/5.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269882/5_btgu7m.webp",
			},
			{
				id: 6,
				category: "Temi Abiodun",
				// imageUrl: "/friends/6.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269883/6_wkhecm.webp",
			},
			{
				id: 7,
				category: "Kenny, Bundo",
				// imageUrl: "/friends/7.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269897/7_izi7at.png",
			},
			{
				id: 8,
				category: "Enoch",
				// imageUrl: "/friends/8.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269888/8_waxzet.webp",
			},
			{
				id: 9,
				category: "Ifeanyi, Fiyin, Shile & Opara",
				// imageUrl: "/friends/9.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269884/9_c9qjch.webp",
			},
			{
				id: 10,
				category: "Dolapo Oyesola",
				// imageUrl: "/friends/10.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269885/10_ysgtaq.webp",
			},
			{
				id: 11,
				category: "Shiloh & Fortune",
				// imageUrl: "/friends/11.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269893/11_sjmdl8.jpg",
			},
			{
				id: 12,
				category: "Caleb Emelu",
				// imageUrl: "/friends/12.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269886/12_ljotvv.webp",
			},
			{
				id: 13,
				category: "CAVEIR Team",
				// imageUrl: "/friends/13.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269887/13_ig0rfs.webp",
			},
			{
				id: 14,
				category: "Samuel Ogunlusi",
				// imageUrl: "/friends/14.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269892/14_gorgno.jpg",
			},
			{
				id: 15,
				category: "Timmy and John",
				// imageUrl: "/friends/15.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269889/15_jsnu3h.webp",
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
				// imageUrl: "/gf/1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269918/1_r9g014.webp",
			},
			{
				id: 2,
				category: "",
				// imageUrl: "/gf/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269918/2_wyfoes.webp",
			},
			{
				id: 3,
				category: "",
				// imageUrl: "/gf/3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269919/3_skmbom.webp",
			},
			{
				id: 4,
				category: "",
				// imageUrl: "/gf/4.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269920/4_konc6n.webp",
			},
		],
	},
];

const Friends = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");

	return (
		<Box id="appreciation" py={smallScreen ? 50 : 100}>
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
				<Box mt="lg">
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
