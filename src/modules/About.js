import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Fade } from "react-reveal";

const About = () => {
	const smallScreen = useMediaQuery("(max-width: 586px)");
	return (
		<Box mb={"100px"}>
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
						Meet Somade Daniel
					</Text>
				</Text>
			</Fade>
			<Text align="justify">
				<Fade bottom>
					<div>
						Welcome to my journey! I'm{" "}
						<strong>Somade Daniel Oluwaseunfunmi</strong>, a{" "}
						<strong>first-class graduate in Computer Science</strong> from Caleb
						University, with a CGPA of 4.76. I entered Caleb University through
						direct entry (DE), completing my B.Sc. from 2021 to 2024. Before
						that, I earned a National Diploma (ND) in Computer Science from
						Gateway Polytechnic, Saapade, finishing with distinction.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						Professionally, I now serve as the{" "}
						<strong>
							Team Lead in the Solutions Engineering Department at Fieldbase
							Services Limited
						</strong>
						. My coding journey began in late 2017, and I have since honed my
						skills in software development.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						I’m passionate about <strong>running</strong>, focusing on
						long-distance races (5km - 21km) and aiming to complete my first
						marathon at the Access Bank Lagos City Marathon on February 15. I
						have participated in various local races, pushing my limits and
						enjoying the sense of achievement that comes with each run.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						My background in <strong>tailoring</strong> began in 2020 when I
						sewed for others. I now sew exclusively for myself, having made my
						Luncheon and Thanksgiving outfits. I also enjoy photography and
						aspire to <strong>model</strong>
						someday, despite being 5 feet 9 inches tall.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						I have a strong interest in
						<strong> teaching</strong>. Throughout my time at Caleb University,
						I have actively tutored my classmates in our coursework and shared
						my knowledge in the tech space, helping others to excel academically
						and professionally.
					</div>
				</Fade>
			</Text>
		</Box>
	);
};

export default About;
