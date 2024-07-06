import { useState } from "react";
import { Box, Container, Stepper, Text } from "@mantine/core";
import { Fade } from "react-reveal";

const Events = () => {
	const [active, setActive] = useState(5);

	const days = [
		{
			id: 1,
			label: "19 Jun 2024",
			title: "Project Defense",
			description: `On this day, I presented my final year project (thesis) to a panel of lecturers and supervisors. It was a culmination of my hard work and dedication throughout the year. I am thrilled to share that I passed with flying colors.`,
		},
		{
			id: 2,
			label: "21 Jun 2024",
			title: "Old Money Dinner",
			description: `This event was a special themed dinner for the graduating set, with an "old money" theme. We dressed in classic, elegant styles reminiscent of bygone eras. It was a memorable evening filled with nostalgia and celebration.`,
		},
		{
			id: 3,
			label: "04 Jul 2024",
			title: "Jersey Day",
			description: `Jersey Day was a fun-filled day where we wore jerseys representing our various halls of residence. The day was packed with sports activities, including track events and a spirited tug of war. It was a great way to showcase our hall pride and bond with fellow students.`,
		},
		{
			id: 4,
			label: "05 Jul 2024",
			title: "Ankara Luncheon",
			description: `The Ankara Luncheon was an event for final year students where we all dressed in vibrant Ankara fabric. It was a colorful and joyous occasion, celebrating our heritage and the journey we had undertaken together.`,
		},
		{
			id: 5,
			label: "25 July 2024",
			title: "Sign Out Celebration",
			description: `This day marked the end of my academic journey as I wrote my final exam. In line with the tradition in Nigerian universities, I wore a white shirt which my classmates signed as a memento. It was a bittersweet moment, filled with a sense of achievement and nostalgia.
								`,
		},
		{
			id: 6,
			label: "28 July 2024",
			title: "Thanksgiving Service",
			description: `After completing all exams, we attended a special Thanksgiving service at church. It was a time to reflect on our journey and express our gratitude to God for His guidance and blessings throughout our time at the university.
								`,
		},
	];

	return (
		<Box bg="main.0" py={50}>
			<Container>
				<Fade bottom>
					<Text
						align="center"
						fw="bold"
						fz={32}
						mb="lg"
						color="purple"
						tt="uppercase">
						<Text component="span" style={{ borderBottom: "3px purple solid" }}>
							Final Year Time-line
						</Text>
					</Text>
				</Fade>

				<Stepper active={active} onStepClick={setActive} orientation="vertical">
					{days.map((day) => (
						<Stepper.Step
							key={day.id}
							label={<Fade bottom>{day.label}</Fade>}
							description={
								<Fade bottom>
									<Text align="justify" mb={20}>
										<Text color="purple" fw="bold">
											{day.title} :{" "}
										</Text>
										{day.description}
									</Text>
								</Fade>
							}
						/>
					))}
				</Stepper>
			</Container>
		</Box>
	);
};

export default Events;
