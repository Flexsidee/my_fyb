import { useState } from "react";
import {
	Box,
	Burger,
	Group,
	Text,
	MediaQuery,
	createStyles,
} from "@mantine/core";

const AppNavbar = () => {
	const { classes } = useStyle();
	const [opened, setOpened] = useState(false);

	const links = [
		{ id: 1, label: "About", link: "#about" },
		{ id: 2, label: "Achievements", link: "#achievements" },
		{ id: 3, label: "Final Year Timeline", link: "#timeline" },
		{ id: 4, label: "Future Plan", link: "#future-plan" },
		{ id: 5, label: "Appreciation", link: "#appreciation" },
	];

	const scrollToSection = (link) => {
		const section = document.querySelector(link);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setOpened(false); // Close the menu on smaller screens
	};

	// eslint-disable-next-line react/prop-types
	const AppNavbarLinks = ({ label, link }) => {
		return (
			<Text
				component="a"
				href={link}
				className={classes.links}
				onClick={(e) => {
					e.preventDefault();
					scrollToSection(link);
				}}>
				{label}
			</Text>
		);
	};

	return (
		<Box
			className={classes.navbar}
			style={{
				position: "fixed",
				width: "100%",
				zIndex: 1000,
			}}>
			<Group p="lg" position="apart">
				<Text fw="bold" fz={24} color="main.0" tt="uppercase">
					Somade Daniel
				</Text>
				<Box>
					<MediaQuery largerThan="sm" styles={{ display: "none" }}>
						<Burger
							opened={opened}
							onClick={() => setOpened((o) => !o)}
							size="md"
							color="white"
							mr="xl"
						/>
					</MediaQuery>
					<MediaQuery smallerThan="sm" styles={{ display: "none" }}>
						<Group spacing={30}>
							{links.map((link) => (
								<AppNavbarLinks
									key={link.id}
									label={link.label}
									link={link.link}
								/>
							))}
						</Group>
					</MediaQuery>
				</Box>
			</Group>
			{opened && (
				<MediaQuery largerThan="sm" styles={{ display: "none" }}>
					<Box
						pb="md"
						pl={20}
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "8px",
						}}>
						{links.map((link) => (
							<AppNavbarLinks
								key={link.id}
								label={link.label}
								link={link.link}
							/>
						))}
					</Box>
				</MediaQuery>
			)}
		</Box>
	);
};

export default AppNavbar;

const useStyle = createStyles((theme) => ({
	navbar: {
		background: theme.colors.main[4],
		color: theme.colors.main[0],
	},
	links: {
		fontWeight: "bold",
		fontSize: "16px",
		color: theme.colors.main[0],

		"&:hover": {
			color: theme.colors.main[2],
		},
	},
}));
