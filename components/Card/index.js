/** @format */

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./styles";
import moment from "moment";
const Card = ({ news }) => {
	const { item } = news;

	const onPress = url => {
		Linking.canOpenURL(url).then(supported => {
		  if (supported) {
			Linking.openURL(url);
		  } else {
			console.log(`Don't know how to open URL: ${url}`);
		  }
		});
	  };
	return (
		<View style={styles.cardContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{item.title}</Text>
			</View>
			<View>
				<Image source={{uri: item.urlToImage}} style={styles.image} />
			</View>
			<View style={styles.source}>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Text style={{ fontWeight: "600" }}>From: </Text>
					<Text> {item && item.source && item.source.name}</Text>
				</View>
			</View>
			<View style={styles.descr}>
				<Text numberOfLines={3}>{item.description}</Text>
			</View>
			<View style={styles.publishedContainer}>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Text style={{ fontWeight: "600" }}>Published</Text>
					<Text>: {moment(item.publishedAt).fromNow()}</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity style={styles.readMoreBtn} onPress={() => onPress(item.url)}>
					<Text style={styles.readMoreText}>Read more</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Card;
