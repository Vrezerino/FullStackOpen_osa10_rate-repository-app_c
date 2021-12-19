import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	field: {
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		borderWidth: 1,
		borderRadius: 5,
		padding: 15
	},
	errorText: {
		color: theme.colors.error
	},
});

const FormikTextInput = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name);
	const showError = meta.touched && meta.error;

	return (
		<>
			<TextInput
				style={
					{...styles.field, 
						borderColor: showError 
						? styles.errorText.color 
						: 'black',
						marginBottom: showError
						? 0
						: 5
					}
				}
				onChangeText={value => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
			/>
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</>
	);
};

export default FormikTextInput;