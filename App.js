/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
} from "react-native";

import Card from "./components/Card";
import styles from "./styles";

const renderItem = ({ item, index }) => <Card item={item} />;

export default function App() {
	const [dataArray, setDataArray] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	// console.log("pageNumber", pageNumber);
	// call on fetch data

	const getNews = async () => {
		setLoading(true);
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&pageSize=5&page=${
				pageNumber + 1
			}`
		);
		const jsonData = await response.json();
		// console.log("jsonData", jsonData.articles.length);
		setDataArray([...dataArray, ...jsonData.articles]);
		setPageNumber(pageNumber + 1);
		setLoading(false);
	};
	useEffect(() => {
		getNews();
	}, []);
	// // console.log("dataArray", dataArray.length);
	return (
		<View style={styles.container}>
			<View style={{ margin: 10 }} />
			<StatusBar style="auto" />
			<ActivityIndicator
				size={"large"}
				animating={loading}
				color={"#ffbf1f"}
				style={styles.loading}
			/>
			<View
				style={{
					width: 300,
					backgroundColor: "red",
					position: "relative",
					top: 0,
					zIndex: 1,
					padding: 10,
					borderRadius: 10,
				}}
			>
				<Text>Article count: {dataArray.length}</Text>
			</View>
			<FlatList
				data={dataArray}
				renderItem={(item) => <Card news={item} />}
				keyExtractor={item => item.title}
				// ListHeaderComponent={() => {
				// 	return (

				// 	);
				// }}
				// ListHeaderComponentStyle={{
				//   position: "relative",

				// }}
				onEndReached={getNews}
				onEndReachedThreshold={1}
			/>
		</View>
	);
}
