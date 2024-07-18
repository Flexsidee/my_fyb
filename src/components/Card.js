import { createStyles, Paper, Text, rem, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

const Card = ({ imageUrl, category }) => {
	const { classes } = useStyles();
	const [imageLoaded, setImageLoaded] = useState(false);
	const [imageError, setImageError] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = imageUrl;
		img.onload = () => setImageLoaded(true);
		img.onerror = () => setImageError(true);
	}, [imageUrl]);

	return (
		<LazyLoad>
			{imageError || !imageLoaded ? (
				<Skeleton height={440} radius="md" />
			) : (
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
			)}
		</LazyLoad>
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
