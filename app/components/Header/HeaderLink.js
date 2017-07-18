import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
    margin: 0 0 0 1em;
    list-style: none;
    text-decoration: none;
    color: #000;
    &:hover {
        color: #000
        border-bottom: 4px solid #fdeb6e
    }

`;
