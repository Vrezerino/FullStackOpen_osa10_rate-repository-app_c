import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { useHistory } from 'react-router-native';
import theme from '../theme';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
	view: {
		//fontSize: theme.fontSizes.body
		padding: theme.padding.basic,
		backgroundColor: 'white'
	},
	button: {
		padding: theme.padding.basic,
		backgroundColor: 'red',
		fontSize: theme.fontSizes.body,
		color: 'white',
		borderRadius: 5,
		textAlign: 'center'
	}
});

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, 'Minimum length is 3.')
		.required('Username is required.'),
	password: yup
		.string()
		.min(8, 'Minimum length is 8.')
		.required('Password is required.')
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.view}>
			<View>
				<FormikTextInput
					name='username'
					placeholder='Username' />
				<FormikTextInput
					secureTextEntry
					name='password'
					placeholder='Password' />
			</View>
			<View>
				<Pressable
					onPress={onSubmit}>
					<Text style={styles.button}>
						Sign In
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const initialValues = {
	username: '',
	password: ''
};

const SignIn = () => {
	let history = useHistory();
	const { signIn } = useSignIn();

	const onSubmit = async values => {
		const { username, password } = values;

		try {
			await signIn({ username, password });
			history.push('/');
		} catch (e) {
			Alert.alert(e.message);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;