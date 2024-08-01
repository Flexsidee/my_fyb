import { Box, Container, Image, List, Skeleton, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";

const achievements = [
	{
		id: 1,
		title:
			"Pioneer GDSC (Google Developer Student Club) Lead (Aug 2023 - July 2024)",
		// imageUrl: "/ach-images/gdsc1.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269675/gdsc1_hacwx5.webp",
		imgAlt: "GDSC Caleb Core Team Members",
		description: `As the Pioneer Lead for Google Developer Student Clubs (GDSC) at
							our university, I organized workshops, hackathons, and study
							groups to foster a community of developers and tech enthusiasts.
		`,
	},
	{
		id: 2,
		title: "Vice President and Acting President, NACOS (Aug 2023 - July 2024)",
		// imageUrl: "/ach-images/nacos.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269675/nacos_vqkr6k.webp",
		imgAlt: "Pioneer NACOS Caleb Chapter Executives",
		description: `Served as Vice President for the Pioneer Nigeria Association of
						Computing Students (NACOS), Caleb Chapter Executives. Subsequently,
						I became the acting president until graduation, leading various
						initiatives and events for the association.`,
	},
	{
		id: 3,
		title: "NCS 13th Annual IT Development Programme (Jan 2024)",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269676/ncs13a_tu98nw.webp",
		imgAlt: "The team and coach after arriving at the venue",
		description: `Represented the university and led the team in the 13th Annual Information Technology Development Programme organized by NCS at Federal University of Agriculture Abeokuta (FUNAAB). Personally excelled in the Quiz category, finishing 1st with a score of 98/100. Additionally, the university team came 2nd in the IT Innovation Presentation Contest and 2nd in the Software Challenge, to which I contributed.`,
	},
	{
		id: 4,
		title: "NCS 12th Annual IT Development Programme (Nov 2022)",
		// imageUrl: "/ach-images/ncs12b.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269677/ncs12b_th0d8r.webp",
		imgAlt: "The team and coach with our awards and solution banner",
		description: `Represented the university at the Nigeria Computer Society (NCS), Ogun State Chapter, in their 12th Annual Information Technology Development Programme at Bells University. Finished 2nd in the Software Challenge and 4th in the Quiz, competing against numerous tertiary institutions. Additionally, the university team finished 2nd in the IT Innovation Presentation Contest, to which I contributed.`,
	},
	{
		id: 5,
		title: "BUCC TechXplore Convention (Nov 2023)",
		// imageUrl: "/ach-images/xplore1.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269678/xplore1_hiid5u.webp",
		imgAlt: "The team getting an award of participation from BUCC President",
		description: `Led the university team to the TechXplore Convention organized by
						Babcock University Computer Club (BUCC) at Babcock University.
						Participated and represented the university in various tech-related
						events and discussions.`,
	},
	{
		id: 6,
		title: "CAVIER Development (Jun 2024)",
		// imageUrl: "/ach-images/cavier1.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269675/cavier1_sxknqs.webp",
		imgAlt: "Image of the team with VC, DVC and other dignataries with CAVEIR",
		description: `	Contributed to the development of CAVIER (Caleb Autonomous
						Intelligent Versed Robot), an automated robotics receptionist and
						educational robotics toy. It was exhibited to students, staff, and
						important dignitaries, including the Vice Chancellor, Deputy VC, and
						Bursar. An invited speaker at the exhibition is now sponsoring the
						project.`,
	},
	{
		id: 7,
		title: "NFC Payment Project (Jan 2023)",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269674/motivateion_l37wat.webp",
		imgAlt: "Explaining the project functionalities to colleagues",
		description: `Contributed to the development of an NFC Payment project, an IoT
						solution using NFC cards for payments across the institution. The
						prototype was displayed at an exhibition attended by important
						dignitaries, including the Vice Chancellor, Deputy VC, Registrar,
						Bursar, staff, and students.`,
	},
	{
		id: 8,
		title: "SOAIR Presentation at Nigerian Airforce Base (July 2024)",
		// imageUrl: "/ach-images/soair.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269677/soair_yleat3.webp",
		imgAlt: "Caleb University Represenatives at SOAIR in Air",
		description: `Invited to the School Of AI and Robotics (SOAIR) at the Nigerian Airforce Base, Ikeja, Lagos, along with other students, to present CAVIER and other projects, including the NFC Payment project. This was a prestigious opportunity to showcase our innovations to military officials.`,
	},
	{
		id: 9,
		title: "VC Cup Victory (Jun 2024)",
		// imageUrl: "/ach-images/vc.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269677/vc_cy6i71.webp",
		imgAlt: "Computer Science representatives and awards won",
		description: `Contributed to the computer science department's historic victory in
						the first-ever VC Cup. This achievement highlighted our department's
						excellence and teamwork.`,
	},
	{
		id: 10,
		title: "Mentorship and Motivation",
		// imageUrl: "/ach-images/run.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269677/run_xnf2bh.webp",
		imgAlt:
			"Participating in Lagos City Marathon with friends from the university (Feb 2024)",
		description: `Actively mentored and motivated numerous students in areas such as
						academics, programming, and fitness. Helped them improve their
						academic performance, career prospects, and physical health through
						running and workouts.`,
	},
	{
		id: 11,
		title: "Invited to talk on air at Caleb Radio (Jan 2023)",
		// imageUrl: "/ach-images/radio.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269674/radio_tgqr2r.webp",
		imgAlt: "At the studio with colleagues",
		description: `Invited twice to speak at the studio. The first time was to discuss the software solution we presented at the NCS 12th Annual IT Development Programme. The second time was to talk about the NFC Project I worked on.`,
	},
	{
		id: 12,
		title: "Invited to Caleb News Room (July 2024)",
		// imageUrl: "/ach-images/news.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1721269674/news_zcuqbc.webp",
		imgAlt: "With the CAVIER team at Caleb News Room",
		description: `Invited to an interview at the newsroom to discuss the inception, development, challenges, journey, and presentation of CAVIER at the Nigeria Air Force Base.`,
	},
	{
		id: 13,
		title:
			"Google Developer Student Club Leads Graduation Party Invitation (July 2024)",
		// imageUrl: "/ach-images/news.webp",
		imageUrl:
			"https://res.cloudinary.com/dxoc9hoji/image/upload/v1722531335/google_cnxidi.webp",
		imgAlt: "Fellow Ex GDSC Leads with Program Manager at Google Lagos Office",
		description: `As the outgoing GDSC Lead, I had the opportunity to be invited to the 2023/2024 Google Developer Student Club Leads graduation party at the Google Lagos office.`,
	},
];

const Achievements = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	const [imageLoading, setImageLoading] = useState(
		achievements.reduce((acc, ach) => {
			acc[ach.id] = true;
			return acc;
		}, {})
	);

	const handleImageLoad = (id) => {
		setImageLoading((prevState) => ({
			...prevState,
			[id]: false,
		}));
	};

	return (
		<Box bg="main.0" py={smallScreen ? 20 : 80} id="achievements">
			<Fade bottom>
				<Text
					align="center"
					fw="bold"
					fz={smallScreen ? 28 : 32}
					mb="md"
					mt={50}
					color="blue"
					tt="uppercase">
					<Text component="span" style={{ borderBottom: "3px purple solid" }}>
						Achievements
						{/* in Caleb University */}
					</Text>
				</Text>
			</Fade>
			<Container>
				<List type="ordered">
					{achievements.map((ach) => (
						<>
							<Fade bottom key={ach.id}>
								<List.Item pr="sm">
									<Text component="span" fw="bold" color="main.3">
										{ach.title}:
									</Text>
									<br />
									{ach.description}
									{ach.imageUrl && (
										<>
											<LazyLoad>
												{imageLoading[ach.id] && (
													<Skeleton height={440} radius="md" />
												)}
												<Image
													src={ach.imageUrl}
													alt={ach.imgAlt}
													style={{
														display: imageLoading[ach.id] ? "none" : "block",
													}}
													onLoad={() => handleImageLoad(ach.id)}
													height={smallScreen ? "200px" : "500px"}
													radius="md"
													mt="xs"
												/>
												<Text ta="center" color="main.3" mt={2}>
													<em>{ach.imgAlt}</em>
												</Text>
												<br />
											</LazyLoad>
										</>
									)}
								</List.Item>
							</Fade>
							<br />
						</>
					))}
				</List>
			</Container>
		</Box>
	);
};

export default Achievements;
