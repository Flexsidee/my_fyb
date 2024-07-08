import { createStyles, Paper, Text, rem } from "@mantine/core";

const Card = ({ imageUrl, category }) => {
	const { classes } = useStyles();

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{ backgroundImage: `url(${imageUrl})` }}
			className={classes.card}>
			<div>
				<Text className={classes.category} size="md">
					{category}
				</Text>
			</div>
		</Paper>
	);
};

export default Card;

const useStyles = createStyles((theme) => ({
	card: {
		height: rem(440),
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},

	category: {
		color: theme.white,
		opacity: 0.9,
		fontWeight: 700,
		textTransform: "uppercase",
	},
}));
