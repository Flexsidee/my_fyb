import { Box, Text } from "@mantine/core";
import { Fade } from "react-reveal";

const About = () => {
	return (
		<Box mb={"100px"}>
			<Fade bottom>
				<Text
					align="center"
					fw="bold"
					fz={32}
					mb="md"
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
						<strong>Somade Daniel Oluwaseunfunmi</strong>, a final year student
						at Caleb University pursuing a{" "}
						<strong>B.Sc. in Computer Science</strong>. I entered Caleb
						University through direct entry (DE), spending three years
						(2021-2024) to complete my degree. Prior to this, I earned a
						National Diploma (ND) in Computer Science from Gateway Polytechnic,
						Saapade (2018-2020), finishing with a distinction.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						Professionally, I am a <b>software developer</b> with over three
						years of work experience. Currently, I work as a frontend developer
						for <strong>Fieldbase Services Limited</strong>. My journey in
						coding began in late 2017, and since then, I have continually
						developed my skills and expertise in software development.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						In addition to my academic and professional pursuits, I am
						passionate about <strong>running</strong>. I focus on long-distance
						runs (5km - 21km) and aspire to complete a marathon (42km) soon. I
						have participated in various local races, pushing my limits and
						enjoying the sense of achievement that comes with each run.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						Apart from running, I have a strong interest in
						<strong> teaching</strong>. Throughout my time at Caleb University,
						I have actively tutored my classmates in our coursework and shared
						my knowledge in the tech space, helping others to excel academically
						and professionally.
					</div>
				</Fade>
				<br />
				{/* <br /> */}
				<Fade bottom>
					<div>
						I also enjoy <strong>taking pictures</strong> and hope to model
						someday, even though I am 5 feet 9 inches tall. Additionally, I have
						a background in <strong>tailoring</strong>. I used to sew for others
						until 2020 when I decided to focus on software development. Now, I
						sew exclusively for myself.
					</div>
				</Fade>
			</Text>
		</Box>
	);
};

export default About;
