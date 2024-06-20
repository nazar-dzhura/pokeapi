import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import routes from "../../../../shared/routes";

interface PokemonCardProps {
    name: string;
    imageSrc: string;
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
`

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageSrc }) => {
    return (
        <Link to={routes.POKEMON_DETAIL.replace(':name', name.toLowerCase())}>
            <Card
                bordered={false}
                hoverable
                cover={
                    <ImageContainer>
                        <Image alt={`${name}'s image`} src={imageSrc} />
                    </ImageContainer>
                }
            >
                <Card.Meta title={name} />
            </Card>
        </Link>
    );
};
