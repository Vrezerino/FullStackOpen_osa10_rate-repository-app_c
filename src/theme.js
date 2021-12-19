import { Platform } from "react-native";

const theme = {
  colors: {
		backgroundMain: '#e1e4e8',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: 'red',
		error: '#d73a4a',
		appbar: 'maroon'
  },
  fontSizes: {
    body: 20,
    subheading: 25,
		appbar: 30
  },
  fonts: {
    main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System'
		}),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
	padding: {
		basic: 17
	}
};

export default theme;