import React from 'react'
import {Link} from "react-router-dom";
import routes from "../../shared/routes";
import styled from "styled-components";
import {Layout as AntdLayout} from "antd";
import Title from "antd/es/typography/Title";

const StyledHeader = styled(AntdLayout.Header)`
  background: #001529;
  display: flex;
  align-items: center;
`;


const StyledTitle = styled(Title)`
  color: #fff !important;
  margin: 0 !important;
`;

export const Header: React.FC = () => {
    return <StyledHeader>
        <Link to={routes.HOME}>
            <StyledTitle level={1}>Pokedex</StyledTitle>
        </Link>
    </StyledHeader>
}
