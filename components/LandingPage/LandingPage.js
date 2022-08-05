import React from "react";
import Image from "next/image";
import BlinkingText from "../BlinkingText/BlinkingText";
import s from "../../styles/LandingPage.module.css";

// Get a random image from public/posts
const _getRandomImage = () => {
	const images = [
		"/posts/photo (1).jpg",
		"/posts/photo (2).jpg",
		"/posts/photo (3).jpg",
		"/posts/photo (4).jpg",
		"/posts/photo (5).jpg",
		"/posts/photo (6).jpg",
		"/posts/photo (7).jpg",
		"/posts/photo (8).jpg",
		"/posts/photo (9).jpg",
		"/posts/photo (10).jpg",
		"/posts/photo (11).jpg",
		"/posts/photo (12).jpg",
		"/posts/photo (13).jpg",
		"/posts/photo (14).jpg",
		"/posts/photo (15).jpg",
		"/posts/photo (16).jpg",
		"/posts/photo (17).jpg",
		"/posts/photo (18).jpg",
		"/posts/photo (19).jpg",
		"/posts/photo (20).jpg",
		"/posts/photo (21).jpg",
		"/posts/photo (22).jpg",
		"/posts/photo (23).jpg",
		"/posts/photo (24).jpg",
		"/posts/photo (25).jpg",
		"/posts/photo (26).jpg",
		"/posts/photo (27).jpg",
		"/posts/photo (28).jpg",
		"/posts/photo (29).jpg",
		"/posts/photo (30).jpg",
	];
	return images[Math.floor(Math.random() * images.length)];
}

const LandingPage = () => {
	const image = _getRandomImage();
	return (
		<div>
			<BlinkingText/>
			<Image className={s.image} src={image} alt="You've just got tposed!" layout="fill" objectFit="contain"/>
		</div>
	);
}

export default LandingPage;