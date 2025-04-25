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
				<DesktopOnlyActionGroup>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</DesktopOnlyActionGroup>
				<Logo />
				<SubscribeAction>
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
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;
	height: ${98 / 16}rem;

	@media ${QUERIES.tabletAndUp} {
		margin-top: 48px;
	}

	@media ${QUERIES.desktopAndUp} {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		justify-content: revert;
		justify-items: start;
		margin-top: 16px;
		margin-bottom: 72px;
	}
`;

var DesktopOnlyActionGroup = styled(ActionGroup)`
	display: none;
	@media ${QUERIES.desktopAndUp} {
		display: flex;
	}
`;

var SubscribeAction = styled.div`
	display: none;

	@media ${QUERIES.desktopAndUp} {
		display: revert;
		justify-self: end;
		position: relative;
	}
`;

var SubscriberLink = styled.a`
	position: absolute;
	width: 100%;
	text-align: center;
	margin-top: 8px;
	text-decoration: underline;
	font-size: ${14 / 16}rem;
	font-style: italic;
	font-weight: var(--font-weight-normal);
	color: var(--color-gray-900);
`;

export default Header;
