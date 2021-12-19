import React from 'react';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	list: {
		height: '89%' // Needed in order to render the last FlatList item correctly which is a bummer
	},
	loading: {
		textAlign: 'center',
		backgroundColor: 'white',
		fontSize: theme.fontSizes.appbar,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.bold,
	}
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const { repositories, loading } = useRepositories();

	const repositoryNodes = repositories
		? repositories.edges?.map(edge => edge.node)
		: [];

	const renderItem = ({ item }) => (
		<RepositoryItem item={item} />
	);

	return loading
		? <View>
			<Text style={styles.loading}>
				Loading...
			</Text>
		</View>
		: (
			<View style={styles.list}>
				<FlatList
					data={repositoryNodes}
					ItemSeparatorComponent={ItemSeparator}
					renderItem={renderItem}
				/>
			</View>
		);
};

export default RepositoryList;