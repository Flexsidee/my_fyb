import { ActionIcon, Box, Group, Text, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
	IconBrandGithub,
	IconBrandGmail,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTiktok,
	IconBrandTwitterFilled,
} from "@tabler/icons-react";
import { Fade } from "react-reveal";

const Footer = () => {
	const { classes } = useStyle();
	const mediumScreen = useMediaQuery("(max-width: 786px)");

	return (
		<Box className={classes.footer} py="lg">
			<Fade bottom>
				<Group position="apart" className={classes.link}>
					<Text color="white" mr={mediumScreen ? 0 : 400}>
						Connect with Somade:{" "}
					</Text>
					<Group>
						<ActionIcon
							component="a"
							href="https://www.instagram.com/daniel_somade/"
							variant="transparent"
							target="_blank">
							<IconBrandInstagram color="white" size={24} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="https://www.tiktok.com/@daniel_somade"
							variant="transparent"
							target="_blank">
							<IconBrandTiktok color="white" size={24} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="https://twitter.com/flexsidee"
							variant="transparent"
							target="_blank">
							<IconBrandTwitterFilled color="white" size={24} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="https://github.com/Flexsidee"
							variant="transparent"
							target="_blank">
							<IconBrandGithub color="white" size={24} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="https://www.linkedin.com/in/danielsomade/"
							variant="transparent"
							target="_blank">
							<IconBrandLinkedin color="white" size={24} />
						</ActionIcon>
						<ActionIcon
							component="a"
							href="mailto:flexsidee@gmail.com"
							variant="transparent"
							target="_blank">
							<IconBrandGmail color="white" size={24} />
						</ActionIcon>
					</Group>
				</Group>
				<Text mt="xl" fw="bold" color="gray" pb="md">
					Developed by{" "}
					<Text
						component="a"
						href="https://somadedaniel.netlify.app/"
						target="_blank"
						color="blue">
						Daniel Somade
					</Text>
				</Text>
			</Fade>
		</Box>
	);
};

export default Footer;

const useStyle = createStyles((theme) => ({
	footer: {
		background: theme.colors.main[4],
		color: theme.colors.white,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	link: {
		[`@media (max-width: 568px)`]: {
			display: "flex",
			flexDirection: "column",
		},
	},
}));
