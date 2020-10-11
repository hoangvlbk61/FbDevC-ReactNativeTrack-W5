/** @format */

import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
	cardContainer: {
		// height: 300,
		width: windowWidth - 20,
		padding: 10,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#ffbf1f",
		margin: 10,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	titleContainer: {
		marginBottom: 10,
	},
	titleText: {
		fontSize: 24,
		fontWeight: "600",
	},
	image: {
		height: 150,
		width: windowWidth - 30,
	},
	descr: {
		height: 60,
		// flexWrap: "wrap",
		// overflow: "hidden",
		// flexDirection: "row",
	},
	source: {
		alignSelf: "flex-start",
	},
	publishedContainer: {
		alignSelf: "flex-start",
	},
	publishedText: {
		opacity: 0.9,
		color: "#E4E6E8",
		display: "none",
	},
	readMoreBtn: {
		backgroundColor: "#ffc342",
		width: windowWidth - 40,
		height: 40,
		padding: 10,
		display: "flex",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	readMoreText: {
		color: "white",
	},
});
