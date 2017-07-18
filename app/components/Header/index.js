import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './logo.png';
import messages from './messages';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
`;


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <HeaderWrapper className="header-wrapper">
            <A href="">
                <Img src={Banner} alt="react-boilerplate - Logo"/>
            </A>
            <A>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </A>
            <NavBar className='main-menu'>
                <HeaderLink to="/">
                    <FormattedMessage {...messages.home} />
                </HeaderLink>
                <HeaderLink to="/about">
                    <FormattedMessage {...messages.about} />
                </HeaderLink>
                <HeaderLink to="/news">
                    <FormattedMessage {...messages.news} />
                </HeaderLink>
                <HeaderLink to="/work">
                    <FormattedMessage {...messages.work} />
                </HeaderLink>
                <HeaderLink to="/clients">
                    <FormattedMessage {...messages.clients} />
                </HeaderLink>
                <HeaderLink to="/contact">
                    <FormattedMessage {...messages.contact} />
                </HeaderLink>
            </NavBar>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
