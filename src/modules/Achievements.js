import { Box, List, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

const Achievements = () => {
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
						Achievements in Caleb University
					</Text>
				</Text>
			</Fade>
			<Text align="justify">
				<List type="ordered">
					<Fade bottom>
						<List.Item pr="sm">
							<strong>Pioneer GDSC Lead (Aug 2023 - July 2024)</strong>:
							<br />
							As the Pioneer Lead for Google Developer Student Clubs (GDSC) at
							our university, I organized workshops, hackathons, and study
							groups to foster a community of developers and tech enthusiasts.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>
								Vice President and Acting President, NACOS (Aug 2023 - July
								2024):
							</strong>
							<br />
							Served as Vice President for the Pioneer Nigeria Association of
							Computing Students (NACOS), Caleb Chapter Executives.
							Subsequently, I became the acting president until graduation,
							leading various initiatives and events for the association.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>
								NCS 12th Annual IT Development Programme (Nov 2022):
							</strong>
							<br />
							Represented the university at the Nigeria Computer Society (NCS),
							Ogun State Chapter, in their 12th Annual Information Technology
							Development Programme at Bells University. Finished 2nd in the
							Software Challenge and 4th in the Quiz, competing against numerous
							tertiary institutions. Additionally, the university team finished
							2nd in the IT Innovation Presentation Contest, to which I
							contributed.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>TechXplore Convention (Nov 2023):</strong>
							<br />
							Led the university team to the TechXplore Convention organized by
							Babcock University Computer Club (BUCC) at Babcock University.
							Participated and represented the university in various
							tech-related events and discussions.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>
								NCS 13th Annual IT Development Programme (Jan 2024):
							</strong>
							<br />
							Represented the university and led the team in the 13th Annual
							Information Technology Development Programme organized by NCS at
							Federal University of Agriculture Abeokuta (FUNAAB). Personally
							excelled in the Quiz category, finishing 1st with a score of
							98/100. Additionally, the university team came 2nd in the IT
							Innovation Presentation Contest and 2nd in the Software Challenge,
							to which I contributed.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>CAVIER Development (Jun 2024):</strong>
							<br />
							Contributed to the development of CAVIER (Caleb Autonomous
							Intelligent Versed Robot), an automated robotics receptionist and
							educational robotics toy. It was exhibited to students, staff, and
							important dignitaries, including the Vice Chancellor, Deputy VC,
							and Bursar. An invited speaker at the exhibition is now sponsoring
							the project.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>VC Cup Victory (Jun 2024):</strong>
							<br />
							Contributed to the computer science department's historic victory
							in the first-ever VC Cup. This achievement highlighted our
							department's excellence and teamwork.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>NFC Payment Project (Jan 2023):</strong>
							<br />
							Contributed to the development of an NFC Payment project, an IoT
							solution using NFC cards for payments across the institution. The
							prototype was displayed at an exhibition attended by important
							dignitaries, including the Vice Chancellor, Deputy VC, Registrar,
							Bursar, staff, and students.
						</List.Item>
					</Fade>
					<br />
					<Fade bottom>
						<List.Item pr="sm">
							<strong>Mentorship and Motivation:</strong>
							<br />
							Actively mentored and motivated numerous students in areas such as
							academics, programming, and fitness. Helped them improve their
							academic performance, career prospects, and physical health
							through running and workouts.
						</List.Item>
					</Fade>
				</List>
			</Text>
		</Box>
	);
};

export default Achievements;
