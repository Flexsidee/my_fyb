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
						<strong>Adebadejo Aminat Aderinsola</strong>, widely known as{" "}
						<strong>Meena</strong>, is a talented and ambitious individual with
						a passion for both social media management and fashion
						design/styling. She was born on the 3rd of August, under the zodiac
						sign of Leo, in Ogun State, Nigeria.
					</div>
				</Fade>
				<br />
				<br />
				<Fade bottom>
					From an early age, Meena displayed an innate curiosity and a love for
					connecting with people. Her engaging personality and ability to strike
					up conversations with anyone around her quickly earned her the
					nickname "Meena." She found joy in reading novels, which not only
					expanded her knowledge but also helped her develop a vivid
					imagination.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					As she grew older, Meena discovered her flair for creativity and
					style, which led her to pursue a career as a Fashion Designer and
					Stylist. Her keen eye for fashion trends and her innovative designs
					set her apart in the industry.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					Alongside her fashion ventures, Meena's passion for social media and
					online interactions flourished. She honed her skills as a Social Media
					Manager, mastering the art of content creation and engagement
					strategies. Her dedication and talent helped her build a strong online
					presence and a loyal following on platforms like Instagram and TikTok,
					where she can be found under the handle "Mimi_Adebadejo", you can also
					click the icons at the bottom of this page to reach her.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					One of the most memorable moments in Meena's life was the day she
					found out about her outstanding results in HND1 (Higher National
					Diploma year one). This achievement served as a testament to her hard
					work and determination to excel in both her studies and her chosen
					career paths.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					Meena is deeply grateful for the support and love she receives from
					her loved ones. In a special shout-out, she expresses her heartfelt
					appreciation to God, her parents, her baby brother, and her close
					friends Daniel, Teju, Tosin, and others who have stood by her side
					throughout her journey.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					If circumstances had been different, Meena would have pursued her
					higher education at LASU (Lagos State University). However, her
					determination and enthusiasm in her chosen fields made her thrive
					without a doubt.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					As someone who cherishes life and values every moment, Meena lives by
					the motto, "Enjoy the moment, you never know when it'll be your last."
					This positive outlook on life and her ability to embrace the present
					make her an inspiration to those around her.
				</Fade>
				<br />
				<br />
				<Fade bottom>
					With her talent, passion, and vibrant personality, Meena continues to
					make a mark in both the fashion industry and the world of social
					media. As she forges ahead on her journey, she remains an excellent
					example of how dedication, creativity, and a positive attitude can
					lead to great accomplishments.
				</Fade>
			</Text>
		</Box>
	);
};

export default About;
