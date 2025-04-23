import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<ActionGroup>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</ActionGroup>
				<Logo />
				<SubscribeAction>
					<SubscribeActionSpacer />
					<Button>Subscribe</Button>
					<SubscriberLink href='#'>Already a subscriber?</SubscriberLink>
				</SubscribeAction>
			</MainHeader>
		</header>
	);
};

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;

	@media ${QUERIES.desktopAndUp} {
		display: none;
	}
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 32px;
	margin-bottom: 48px;
	height: ${98 / 16}rem;
`;

var SubscribeActionSpacer = styled.div`
	flex: 1;
`;

var SubscribeAction = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	height: 100%;
`;

var SubscriberLink = styled.a`
	text-decoration: underline;
	font-size: ${14 / 16}rem;
	font-style: italic;
	font-weight: var(--font-weight-normal);
	color: var(--color-gray-900);
	flex: 1;
`;

export default Header;
