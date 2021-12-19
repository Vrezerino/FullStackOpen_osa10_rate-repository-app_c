import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories(first: 30) {
    edges {
      node {
        fullName,
        id,
        ownerName,
        ownerAvatarUrl,
        stargazersCount,
        forksCount,
        reviewCount,
        ratingAverage,
        description,
        language
      }
    }
  }
}
`;

export const GET_AUTHORIZED_USER = gql`
query {
	authorizedUser {
		id
		username
	}
}
`;