import "./Slideshow.css";
import React, { useState, useEffect } from "react";

const SlideShow = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const goToNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
	};

	const goToPrevSlide = () => {
		setCurrentSlide(
			(prevSlide) => (prevSlide - 1 + slides.length) % slides.length
		);
	};

	useEffect(() => {
		// Auto slide every 5 seconds (you can change the interval as needed)
		const interval = setInterval(goToNextSlide, 3500);

		// Clean up the interval when the component unmounts to avoid memory leaks
		return () => clearInterval(interval);
		// eslint-disable-next-line
	}, [currentSlide]); // Trigger effect whenever the currentSlide changes

	return (
		<div className="slideshow-container">
			{slides.map((slide, index) => (
				<div
					className={`slide ${index === currentSlide ? "active" : ""}`}
					key={slide.id}
					style={{ backgroundImage: `url(${slide.imageUrl})` }}
				>
					{/* <div className="slide-caption">Meena's FYB Week</div> */}
				</div>
			))}

			<button className="prev" onClick={goToPrevSlide}>
				&#10094;
			</button>
			<button className="next" onClick={goToNextSlide}>
				&#10095;
			</button>
		</div>
	);
};

export default SlideShow;
