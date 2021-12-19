import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
	const [repositories, setRepositories] = useState([]);
  const { data, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		onError: (e) => {
			console.error(e.message);
		}
	});

	//console.log(data);

  useEffect(() => {
    if (data) {
			setRepositories(data.repositories);
		}
  }, [data]);

  return { repositories, loading/*, refetch: fetchRepositories */ };
};

export default useRepositories;