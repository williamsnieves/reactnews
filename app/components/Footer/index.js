import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';
import List from 'components/List';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
`;

const listStyle = {
  listStyle: 'none',
  display:  'flex'
}

const optionStyle = {
  marginLeft: '1em'
}

function Footer() {
  return (
    <FooterWrapper>
      <section>
        <ul style={listStyle}>
          <li style={optionStyle}><i className="facebook"></i></li>
          <li style={optionStyle}>google</li>
          <li style={optionStyle}>twitter</li>
        </ul>
      </section>
      <section>
        <address>
          12, bishop bridge
          london, w2 6aaa
          +44 (0)20 7258 3979

        </address>
      </section>
    </FooterWrapper>
  );
}

export default Footer;
