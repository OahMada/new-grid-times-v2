import React from 'react';
import styled from 'styled-components';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<SecondaryStoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</SecondaryStoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionStoryWrapper>
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		'main-story'
		'secondary-stories'
		'opinion-stories'
		'advertisement';
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			'main-story secondary-stories'
			'advertisement advertisement'
			'opinion-stories opinion-stories';
		grid-template-columns: 2fr 1fr;
		gap: 48px 0;
	}

	@media ${QUERIES.laptopAndUp} {
		grid-template-areas:
			'main-story secondary-stories opinion-stories'
			'main-story advertisement advertisement';
		grid-template-columns: 5fr 4fr 3fr;
		gap: 0;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;
	@media ${QUERIES.tabletAndUp} {
		border-right: 1px solid var(--color-gray-300);
		padding-right: 16px;
		margin-right: 16px;
	}
`;

var SecondaryStoryWrapper = styled.div`
	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: 16px;
		margin-bottom: 16px;
	}
`;

var OpinionStoryWrapper = styled(SecondaryStoryWrapper)`
	@media ${QUERIES.tabletOnly} {
		flex: 1;
		&:not(:last-of-type) {
			border-bottom: revert;
			padding-bottom: revert;
			margin-bottom: revert;
		}
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.laptopAndUp} {
		border-right: 1px solid var(--color-gray-300);
		padding-right: 16px;
		margin-right: 16px;
	}
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

var OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		/* display: grid;
		grid-template-columns: repeat(4, 1fr); */
		gap: 32px;
		flex-direction: row;
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;

	@media ${QUERIES.laptopAndUp} {
		margin-top: -9px;
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
		margin-top: 16px;
	}
`;

export default MainStoryGrid;
