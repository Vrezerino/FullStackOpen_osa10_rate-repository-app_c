import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight * 2,
		paddingRight: theme.padding.basic,
		paddingBottom: theme.padding.basic,
		backgroundColor: theme.colors.appbar,
		flexDirection: 'row',
	},
	tab: {
		paddingLeft: theme.padding.basic,
		color: 'white',
		fontSize: theme.fontSizes.appbar,
		fontWeight: theme.fontWeights.bold,
	}
});

const AppBar = () => {
	const { data } = useQuery(GET_AUTHORIZED_USER);
	const { signOut } = useSignIn();

	return (
		<View style={styles.container}>
			<ScrollView horizontal>

				<Pressable>
					<Link to='/'>
						<Text style={styles.tab}>
							Repositories
						</Text>
					</Link>
				</Pressable>

				{data?.authorizedUser
					? <Pressable onPress={signOut}>
						<Text style={styles.tab}>
							Sign Out
						</Text>
					</Pressable>

					: <Pressable>
						<Link to='/signin'>
							<Text style={styles.tab}>
								Sign In
							</Text>
						</Link>
					</Pressable>}

			</ScrollView>
		</View>
	);
};

export default AppBar;