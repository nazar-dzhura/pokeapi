import React from 'react';
import {Card, Col, Descriptions, Row} from 'antd';
import styled from 'styled-components';

interface PokemonDetailsCardProps {
    name: string;
    imageSrc: string;
    types: string[];
    height: number;
    weight: number;
    hp: number;
    attack: number;
    defense: number;
}

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledDescriptions = styled(Descriptions)`
    .ant-descriptions-item-label {
        font-weight: bold;
    }
`;

export const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = ({
                                                                        name,
                                                                        imageSrc,
                                                                        types,
                                                                        height,
                                                                        weight,
                                                                        hp,
                                                                        attack,
                                                                        defense
                                                                    }) => {
    return <Card bordered={false}>
        <Row>
            <Col xl={{span: 8}} lg={{span: 24}} xs={{span: 24}}>
                <ImageContainer>
                    <Image alt={`${name}'s image`} src={imageSrc} />
                </ImageContainer>
            </Col>
            <Col xl={{span: 16}} lg={{span: 24}} xs={{span: 24}}>
                <StyledDescriptions title={name}>
                    <Descriptions.Item label="Types">{types.join(', ')}</Descriptions.Item>
                    <Descriptions.Item label="Height">{height}</Descriptions.Item>
                    <Descriptions.Item label="Weight">{weight}</Descriptions.Item>
                    <Descriptions.Item label="HP">{hp}</Descriptions.Item>
                    <Descriptions.Item label="Attack">{attack}</Descriptions.Item>
                    <Descriptions.Item label="Defense">{defense}</Descriptions.Item>
                </StyledDescriptions>
            </Col>
        </Row>
    </Card>
}
