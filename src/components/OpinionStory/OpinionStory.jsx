import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
	return (
		<a href={`/story/${id}`}>
			<Wrapper>
				<Avatar alt='' src={avatar} />
				<div>
					<AuthorName>{author}</AuthorName>
					<ArticleTitle>{title}</ArticleTitle>
				</div>
			</Wrapper>
		</a>
	);
};

// var ArticleLink = styled.a`
// 	&:not(:last-child) {
// 		border-bottom: 1px solid var(--color-gray-300);
// 		padding-bottom: 16px;
// 		margin-bottom: 16px;

// 		@media ${QUERIES.tabletOnly} {
// 			border-bottom: revert;
// 			padding-bottom: revert;
// 			margin-bottom: revert;
// 		}
// 	}
// `;

const Wrapper = styled.article`
	color: var(--color-gray-900);
	/* display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	gap: 21px; */

	/* @media ${QUERIES.tabletOnly} {
		flex-direction: column;
		gap: 8px;
		justify-content: revert;
	} */
`;

const Avatar = styled.img`
	display: block;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
	float: right;
	margin-left: 16px;

	@media ${QUERIES.tabletOnly} {
		float: revert;
		margin-left: revert;
	}
`;

const AuthorName = styled.p`
	font-size: 1.125rem;
	font-weight: var(--font-weight-medium);
	color: var(--color-gray-700);
	margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: var(--font-weight-bold);
	line-height: 1.3;
`;

export default OpinionStory;
