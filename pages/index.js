import Head from 'next/head'
import Image from 'next/image'
import LandingPage from "../components/LandingPage/LandingPage";
import styles from '../styles/Home.module.css'

const Home = () => {
	return (
		<>
			<Head>
				<title>YOUVE JUST GOT TPOSED!</title>
				<meta
					name="description"
					content="You've just got tposed! A social network for tposers."
				/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<LandingPage/>
		</>
	);
}

export default Home;