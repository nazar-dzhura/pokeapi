import React from 'react';
import {Outlet} from 'react-router-dom';
import { Layout as AntdLayout } from 'antd';
import styled from 'styled-components';
import {Header} from "../../widgets/header";

const Content = styled(AntdLayout.Content)`
  padding: 48px;
  min-height: calc(100vh - 64px);
`;

export const Layout: React.FC = () => {
    return (
        <AntdLayout>
            <Header/>
            <Content>
                <Outlet />
            </Content>
        </AntdLayout>
    )
}
