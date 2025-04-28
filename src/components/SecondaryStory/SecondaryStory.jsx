import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
	return (
		<ArticleLink href={`/story/${id}`}>
			<Wrapper>
				<Image alt={image.alt} src={image.src} />
				<Heading>{title}</Heading>
				<Abstract>{abstract}</Abstract>
			</Wrapper>
		</ArticleLink>
	);
};

var ArticleLink = styled.a`
	display: block;
	container-type: inline-size;
`;

const Wrapper = styled.article`
	display: grid;
	gap: 4px 16px;
	color: var(--color-gray-900);

	grid-template-areas:
		'image'
		'heading'
		'abstract';
	grid-template-columns: 1fr;

	@container (min-width: 300px) {
		grid-template-areas:
			'image heading'
			'image abstract';
		grid-template-columns: 120px 1fr;
	}
`;

const Image = styled.img`
	grid-area: image;
	display: block;
	width: 100%;
	height: 120px;
	border-radius: 4px;
	object-fit: cover;
`;

const Heading = styled.h2`
	grid-area: heading;
	font-size: 1.125rem;
	font-weight: var(--font-weight-bold);
	line-height: 1.3;
	/* Optical alignment */
	margin-top: -2px;

	@media ${QUERIES.tabletOnly} {
		margin-top: 10px;
	}
`;

const Abstract = styled.p`
	grid-area: abstract;
	font-size: 1rem;
	white-space: pre-wrap;

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden; /* Necessary for line-clamping */
	align-self: start;
`;

export default SecondaryStory;
