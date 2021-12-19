import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
	const [mutate] = useMutation(SIGN_IN);
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({ variables: { username, password } });
		const token = data.authorize.accessToken;
		authStorage.setAccessToken(token);
		apolloClient.resetStore();
	};

	const signOut = () => {
		authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return { signIn, signOut };
};

export default useSignIn;