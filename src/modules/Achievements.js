import { Box, Container, Image, List, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

const achievements = [
	{
		id: 1,
		title:
			"Pioneer GDSC (Google Developer Student Club) Lead (Aug 2023 - July 2024)",
		imageUrl: "/ach-images/gdsc1.jpeg",
		imgAlt: "I and my GDSC Caleb Core Team Members",
		description: `	As the Pioneer Lead for Google Developer Student Clubs (GDSC) at
							our university, I organized workshops, hackathons, and study
							groups to foster a community of developers and tech enthusiasts.
		`,
	},
	{
		id: 2,
		title: "Vice President and Acting President, NACOS (Aug 2023 - July 2024)",
		imageUrl: "/ach-images/nacos.jpeg",
		imgAlt: "Pioneer NACOS Caleb Chapter Executives",
		description: `Served as Vice President for the Pioneer Nigeria Association of
						Computing Students (NACOS), Caleb Chapter Executives. Subsequently,
						I became the acting president until graduation, leading various
						initiatives and events for the association.`,
	},
	{
		id: 3,
		title: "NCS 12th Annual IT Development Programme (Nov 2022)",
		imageUrl: "/ach-images/ncs12b.jpeg",
		imgAlt: "The team and coach with our awards and solution banner",
		description: `Represented the university at the Nigeria Computer Society (NCS),
						Ogun State Chapter, in their 12th Annual Information Technology
						Development Programme at Bells University. Finished 2nd in the
						Software Challenge and 4th in the Quiz, competing against numerous
						tertiary institutions. Additionally, the university team finished
						2nd in the IT Innovation Presentation Contest, to which I
						contributed.`,
	},
	{
		id: 4,
		title: "TechXplore Convention (Nov 2023)",
		imageUrl: "/ach-images/xplore1.jpeg",
		imgAlt: "The team getting an award of participation from BUCC President",
		description: `Led the university team to the TechXplore Convention organized by
						Babcock University Computer Club (BUCC) at Babcock University.
						Participated and represented the university in various tech-related
						events and discussions.`,
	},
	{
		id: 5,
		title: "NCS 13th Annual IT Development Programme (Jan 2024)",
		imageUrl: "/ach-images/ncs13a.jpeg",
		imgAlt: "The team and coach after arriving at the venue",
		description: `Represented the university and led the team in the 13th Annual
						Information Technology Development Programme organized by NCS at
						Federal University of Agriculture Abeokuta (FUNAAB). Personally
						excelled in the Quiz category, finishing 1st with a score of 98/100.
						Additionally, the university team came 2nd in the IT Innovation
						Presentation Contest and 2nd in the Software Challenge, to which I
						contributed.`,
	},
	{
		id: 6,
		title: "CAVIER Development (Jun 2024)",
		imageUrl: "/ach-images/cavier1.jpeg",
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
		title: "VC Cup Victory (Jun 2024)",
		imageUrl: "/ach-images/vc.jpg",
		imgAlt: "Image of computer science representatives and awards won",
		description: `Contributed to the computer science department's historic victory in
						the first-ever VC Cup. This achievement highlighted our department's
						excellence and teamwork.`,
	},
	{
		id: 8,
		title: "NFC Payment Project (Jan 2023)",
		imageUrl: "/ach-images/motivateion.png",
		imgAlt:
			"Image of me when i was explaining the project functionalities to my collegues",
		description: `Contributed to the development of an NFC Payment project, an IoT
						solution using NFC cards for payments across the institution. The
						prototype was displayed at an exhibition attended by important
						dignitaries, including the Vice Chancellor, Deputy VC, Registrar,
						Bursar, staff, and students.`,
	},
	{
		id: 9,
		title: "Mentorship and Motivation",
		imageUrl: "/ach-images/run.jpeg",
		imgAlt: "Image of me and my guys at Lagos City Marathon",
		description: `Actively mentored and motivated numerous students in areas such as
						academics, programming, and fitness. Helped them improve their
						academic performance, career prospects, and physical health through
						running and workouts.`,
	},
];

const Achievements = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");

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
						Achievements in Caleb University
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
										<Image
											src={ach.imageUrl}
											height={smallScreen ? "200px" : "500px"}
											radius="md"
											mt="xs"
										/>
									)}
									<Text ta="center" color="main.3" mt={2}>
										<em>{ach.imgAlt}</em>
									</Text>
									<br />
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
