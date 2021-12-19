import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Text from './Text';
import theme from "../theme";

const RepositoryItem = ({ item }) => {
	const styles = StyleSheet.create({
		flexContainer: {
			padding: theme.padding.basic,
			flexDirection: 'row',
			backgroundColor: '#FFF',
			fontSize: theme.fontSizes.body
		},
		secondaryText: {
			width: '80%',
			color: theme.colors.textSecondary
		},
		basicInfo: {
			paddingLeft: theme.padding.basic,
			width: '100%'
		},
		avatar: {
			borderRadius: 5,
			width: 90,
			height: 90
		},
		heading: {
			fontWeight: theme.fontWeights.bold,
			fontSize: theme.fontSizes.subheading
		},
		languageOuter: {
			borderRadius: 5,
		},
		languageInner: {
			color: 'white',
			backgroundColor: theme.colors.primary,
			borderRadius: 5
		},
		stats: {
			width: '100%',
			flexGrow: 1
		}
	});

	return (
		<View>

			<View style={styles.flexContainer}>
				<Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
				<View style={styles.basicInfo}>
					<Text style={styles.heading} >{item.fullName}</Text>
					<Text style={styles.secondaryText}>{item.description}</Text>
					<Text style={styles.languageOuter}>
						<Text style={styles.languageInner}>{item.language}</Text>
					</Text>
				</View>
			</View >

			<RepositoryItemStats item={item}/>
		</View>
	);
};

const RepositoryItemStats = ({ item }) => {
	const statsStyles = StyleSheet.create({
		flexContainer: {
			padding: theme.padding.basic,
			flexDirection: 'row',
			backgroundColor: '#FFF',
			fontSize: theme.fontSizes.body
		},
		heading: {
			fontWeight: theme.fontWeights.bold,
			fontSize: theme.fontSizes.subheading
		},
		secondaryText: {
			color: theme.colors.textSecondary
		}
	});

	return (
		<View style={{ ...statsStyles.flexContainer, justifyContent: 'space-around' }}>
			<View>
				<Text style={statsStyles.heading}>{item.stargazersCount}</Text>
				<Text style={statsStyles.secondaryText}>Stars</Text>
			</View>
			<View>
				<Text style={statsStyles.heading}>{item.forksCount}</Text>
				<Text style={statsStyles.secondaryText}>Forks</Text>
			</View>
			<View>
				<Text style={statsStyles.heading}>{item.reviewCount}</Text>
				<Text style={statsStyles.secondaryText}>Reviews</Text>
			</View>
			<View>
				<Text style={statsStyles.heading}> {item.ratingAverage}</Text>
				<Text style={statsStyles.secondaryText}>Rating</Text>
			</View>
		</View>
	);
};



export default RepositoryItem;