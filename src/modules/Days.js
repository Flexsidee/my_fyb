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
				// imageUrl: "fyp-images/Day6-Defense/1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270121/1_xdxrku.webp",
				category: "Project Defense",
			},
			{
				id: 2,
				// imageUrl: "fyp-images/Day6-Defense/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270123/2_gasqxn.webp",
				category: "Samuel, Me, Kenny and Temi",
			},
			{
				id: 3,
				// imageUrl: "fyp-images/Day6-Defense/3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270124/3_xhrerv.webp",
				category: "Inioluwa and I",
			},
			{
				id: 4,
				// imageUrl: "fyp-images/Day6-Defense/4.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270126/4_ox8zba.webp",
				category: "Me and Kenny",
			},
			{
				id: 5,
				// imageUrl: "fyp-images/Day6-Defense/5.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270129/5_dv30gs.webp",
				category: "Timmy, Kachi, Eddie and I",
			},
			{
				id: 6,
				// imageUrl: "fyp-images/Day6-Defense/6.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270127/6_bmr9ey.webp",
				category: "Project Defense",
			},
			{
				id: 7,
				// imageUrl: "fyp-images/Day6-Defense/7.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270133/7_o9nwq5.jpg",
				category: "Me and Adesuwa",
			},
			{
				id: 8,
				// imageUrl: "fyp-images/Day6-Defense/8.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270130/8_vvcnvb.webp",
				category: "Project Defense",
			},
			{
				id: 9,
				// imageUrl: "fyp-images/Day6-Defense/9.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270136/9_if5yag.jpg",
				category: "Me and Sophie",
			},
			{
				id: 10,
				// imageUrl: "fyp-images/Day6-Defense/10.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270131/10_o6vchi.webp",
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
				// imageUrl: "fyp-images/Day1-Dinner/1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270015/1_gqzvdd.webp",
				category: "Dinner",
			},
			{
				id: 2,
				// imageUrl: "fyp-images/Day1-Dinner/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270019/2_qngkud.webp",
				category: "Me and Eddie",
			},
			{
				id: 3,
				// imageUrl: "fyp-images/Day1-Dinner/3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270022/3_xzsjsf.webp",
				category: "Me and Precious",
			},
			{
				id: 4,
				// imageUrl: "fyp-images/Day1-Dinner/4.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270023/4_rucqdq.webp",
				category: "Me, Deolu, Ehis, Chris, Camsy and Kenny",
			},
			{
				id: 5,
				// imageUrl: "fyp-images/Day1-Dinner/5.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270018/5_buvbmz.webp",
				category: "Dinner",
			},
			{
				id: 6,
				// imageUrl: "fyp-images/Day1-Dinner/6.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270025/6_lvc7zn.jpg",
				category: "Timi, Me and Favour",
			},
			{
				id: 7,
				// imageUrl: "fyp-images/Day1-Dinner/7.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270020/7_ffji88.webp",
				category: "Dinner",
			},
			{
				id: 8,
				// imageUrl: "fyp-images/Day1-Dinner/8.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270016/8_kdaljo.webp",
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
				// imageUrl: "fyp-images/Day2-Jersey/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270196/2_y3kzqp.webp",
				category: "Jersey",
			},
			{
				id: 5,
				// imageUrl: "fyp-images/Day2-Jersey/5.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270199/5_r16eyb.webp",
				category: "Me and Dalamu",
			},
			{
				id: 1,
				// imageUrl: "fyp-images/Day2-Jersey/1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270197/1_udyp1o.webp",
				category: "Jersey",
			},
			{
				id: 4,
				// imageUrl: "fyp-images/Day2-Jersey/4.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270201/4_axxw85.webp",
				category: "Me and Green",
			},
			{
				id: 3,
				// imageUrl: "fyp-images/Day2-Jersey/3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270195/3_jmam7w.webp",
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
				// imageUrl: "fyp-images/Day3-Luncheon/1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270161/1_b7qplq.webp",
				category: "Luncheon",
			},
			{
				id: 8,
				// imageUrl: "fyp-images/Day3-Luncheon/8.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270168/8_qrx8ac.webp",
				category: "Paul, Me, Fikayo, Kolade and Dalamu",
				categoryColor: "Purple",
			},
			{
				id: 2,
				// imageUrl: "fyp-images/Day3-Luncheon/2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270160/2_mpflmx.webp",
				category: "Luncheon",
			},
			{
				id: 7,
				// imageUrl: "fyp-images/Day3-Luncheon/7.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270172/7_u3ngl8.jpg",
				category: "Me and Kolade",
			},
			{
				id: 6,
				// imageUrl: "fyp-images/Day3-Luncheon/6.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270165/4_ifsigh.webp",
				category: "Luncheon",
			},
			{
				id: 9,
				// imageUrl: "fyp-images/Day3-Luncheon/9.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270169/6_pxaoym.webp",
				category: "Me and Sophie",
			},
			{
				id: 5,
				// imageUrl: "fyp-images/Day3-Luncheon/5.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721270163/5_ebrkwx.webp",
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
				// imageUrl: "signout/me1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524762/me1_avoj8p.webp",
				category: "Sign Out",
			},
			{
				id: 2,
				// imageUrl: "signout/osi.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524773/osi_ienmpf.jpg",
				category: "Osinachi Ameashi",
				categoryColor: "blue.9",
			},

			{
				id: 3,
				// imageUrl: "signout/group1.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524791/group1_v8reyn.jpg",
				category: "Mena, Ebuka, Sherif, Pablo, etc",
				categoryColor: "blue.9",
			},
			{
				id: 4,
				// imageUrl: "signout/kenny.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524766/kenny_eayrph.webp",
				category: "Salami Kehinde",
			},
			{
				id: 5,
				// imageUrl: "signout/group8.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524770/group8_msqbur.webp",
				category: "Kenny, Bazz, Me and Kolade",
				categoryColor: "blue.9",
			},
			{
				id: 6,
				// imageUrl: "signout/flyn.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524772/flyn_rbil8g.jpg",
				category: "Abu David Flyn",
				categoryColor: "blue.9",
			},
			{
				id: 7,
				// imageUrl: "signout/group2.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524785/group2_qp7ubb.jpg",
				category: "Caleb, Francis, Divine, Annie, Bolu, Collins, etc",
				categoryColor: "red.5",
			},
			{
				id: 8,
				// imageUrl: "signout/derin.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524790/derin_lrxncc.jpg",
				category: "Eyinade Aderinsola",
				categoryColor: "red.8",
			},
			{
				id: 10,
				// imageUrl: "signout/jeff.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524764/jeff_jvrnsa.webp",
				category: "Jefferson",
			},
			{
				id: 11,
				// imageUrl: "signout/group3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524765/group3_trymaf.webp",
				category: "Kenny, and Fiyin",
			},
			{
				id: 12,
				// imageUrl: "signout/sophie.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524769/sophie_vvz0b0.webp",
				category: "George Sophie",
			},
			{
				id: 13,
				// imageUrl: "signout/group4.jpg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524779/group4_cmh5qy.jpg",
				category: "Chisom, Precious, Daniel, Me and Tobi",
			},
			{
				id: 14,
				// imageUrl: "signout/caleb.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524779/caleb_aca2ed.jpg",
				category: "Udom Caleb",
				categoryColor: "red.9",
			},
			{
				id: 15,
				// imageUrl: "signout/group5.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524765/group5_kyuet7.webp",
				category: "Mena, Divine, Me and Jeff",
			},
			{
				id: 16,
				// imageUrl: "signout/tumi.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524767/tumi_ziqzrv.webp",
				category: "Alaran Tunmininu",
			},
			{
				id: 17,
				// imageUrl: "signout/group6.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524784/group6_baooyz.jpg",
				category: "Divine, Bolu, Flyn, etc",
			},
			{
				id: 18,
				// imageUrl: "signout/debola.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524770/debola_ym6k6f.jpg",
				category: "Omooba Adebola",
			},
			{
				id: 19,
				// imageUrl: "signout/group7.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524783/group7_nmqz0s.jpg",
				category: "Sign Out",
			},
			{
				id: 20,
				// imageUrl: "signout/archi.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524765/archi_ojefdx.webp",
				category: "Archi",
				categoryColor: "blue.9",
			},
			{
				id: 22,
				// imageUrl: "signout/briannah.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524767/briannah_egazzd.webp",
				category: "Nwanko Briannah",
			},
			{
				id: 21,
				// imageUrl: "signout/daniel.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524773/daniel_i6a5zt.jpg",
				category: "Edomani Daniel",
			},
			{
				id: 23,
				// imageUrl: "signout/me2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722524763/me2_vnvz6s.webp",
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
				// imageUrl: "thanksgiving/me1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520836/me1_xaqgr1.webp",
				category: "Thanksgiving",
			},
			{
				id: 6,
				// imageUrl: "thanksgiving/azeez.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520837/azeez_vmahl9.webp",
				category: "Azeez Daniel",
			},
			{
				id: 4,
				// imageUrl: "thanksgiving/group1.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520842/group1_ix1zdi.webp",
				category: "Faithful, Caleb, Shiloh, Ifeanyi, Mena, Ebuka",
			},
			{
				id: 2,
				// imageUrl: "thanksgiving/me2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520836/me2_ajldho.webp",
				category: "Thanksgiving",
			},
			{
				id: 8,
				// imageUrl: "thanksgiving/chinwe.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520840/chinwe_rhfq1p.webp",
				category: "Amadu Chinwedu",
			},
			{
				id: 5,
				// imageUrl: "thanksgiving/group2.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520847/group2_mzk850.webp",
				category: "Temi, Fiyin, Roy, Bazz, Kenny, Shiloh and Mena",
			},
			{
				id: 3,
				// imageUrl: "thanksgiving/me3.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520837/me3_zahe0w.webp",
				category: "Thanksgiving",
			},
			{
				id: 21,
				// imageUrl: "thanksgiving/tunmise.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520841/tunmise_ifyq7o.webp",
				category: "Ogunniyi Tunmise",
				categoryColor: "red.9",
			},
			{
				id: 19,
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520843/sophie_dlnnwx.webp",
				// imageUrl: "thanksgiving/sophie.webp",
				category: "Jibola and Sophie",
			},
			{
				id: 9,
				// imageUrl: "thanksgiving/feke.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520848/feke_nzfndb.jpg",
				category: "Alao-Peters Feke",
			},
			{
				id: 10,
				// imageUrl: "thanksgiving/gloria.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520843/gloria_snhnvl.webp",
				category: "Idowu Gloria",
			},
			{
				id: 11,
				// imageUrl: "thanksgiving/ifeanyi.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520843/ifeanyi_usfqke.webp",
				category: "Aladi Ifeanyi",
			},
			{
				id: 12,
				// imageUrl: "thanksgiving/jed.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520845/jed_jld9rn.webp",
				category: "Jed",
			},
			{
				id: 13,
				// imageUrl: "thanksgiving/jibola.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520839/jibola_lzwirh.webp",
				category: "Ajibola Salami",
			},
			{
				id: 14,
				// imageUrl: "thanksgiving/kachi.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520846/kachi_yh2pqa.webp",
				category: "Joshua, Kachi and Dolamu",
			},
			{
				id: 15,
				// imageUrl: "thanksgiving/kenny.jpeg",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520850/kenny_kkwfpf.jpg",
				category: "Salami Kehinde",
			},
			{
				id: 16,
				// imageUrl: "thanksgiving/lekan.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520839/lekan_gaf43g.webp",
				category: "Lekan",
			},
			{
				id: 17,
				// imageUrl: "thanksgiving/precious.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520849/precious_awibo3.webp",
				category: "Precious Ihunaya",
			},
			{
				id: 18,
				// imageUrl: "thanksgiving/roy.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520838/roy_p0wotd.webp",
				category: "Udom Roy",
			},
			{
				id: 20,
				// imageUrl: "thanksgiving/temi.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520836/temi_niov1g.webp",
				category: "Abiodun Temidayo",
			},

			{
				id: 22,
				// imageUrl: "thanksgiving/veronica.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520845/veronica_f2bsqx.webp",
				category: "Ejeh Veronica",
			},
			{
				id: 23,
				// imageUrl: "thanksgiving/victoria.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520842/victoria_maudgp.webp",
				category: "Ajibola Victoria",
			},
			{
				id: 24,
				// imageUrl: "thanksgiving/victory.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520844/victory_digft6.webp",
				category: "Okenwa Victory",
			},
			{
				id: 7,
				// imageUrl: "thanksgiving/caleb.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520840/caleb_o738ky.webp",
				category: "Emelu Caleb",
			},
			{
				id: 25,
				// imageUrl: "thanksgiving/me4.webp",
				imageUrl:
					"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722520836/me4_jn7kz5.webp",
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
