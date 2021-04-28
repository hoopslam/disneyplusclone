import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "../components/Viewers";
import CategorySection from "./CategorySection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../redux/movieSlice";
import { selectUserName } from "../redux/userSlice";
import {
	selectRecommend,
	selectNewDisney,
	selectOriginal,
	selectTrending,
} from "../redux/movieSlice";

const Home = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);
	let recommends = [];
		let newDisneys = [];
		let originals = [];
		let trending = [];

	//on user login
	useEffect(() => {
		//fetch data from firestore
		db.collection("movies").onSnapshot((snapshot) => {
			snapshot.docs.map((doc) => {
				switch (doc.data().type) {
					case "recommend":
						dispatch(setMovies({recommend: recommends}));
						break;
					case "new":
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
						break;
					case "original":
						originals = [...originals, { id: doc.id, ...doc.data() }];
						break;
					case "trending":
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;
					default:
						console.log("no such data");
						break;
				}
			});
			//dispatch data to redux store
			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			);
		});
	}, [userName]);

	return (
		<Container>
			<ImageSlider />
			<Viewers />
			<CategorySection title={"Recommended for You"} selector={selectRecommend} />
			<CategorySection title={"New to Disney"} selector={selectNewDisney} />
			<CategorySection title={"Originals"} selector={selectOriginal} />
			<CategorySection title={"Trending"} selector={selectTrending} />
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&::after {
		background: url("/assets/images/home-background.png") center center / cover no-repeat fixed;
		content: "";
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

export default Home;
