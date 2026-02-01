import React from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';

import { TMDB_CONFIG } from '@config/tmdb';

type Props = {
    path: string | null;
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
};

export const PosterImage = ({ path, width, height, style }: Props) => {
    if (!path) {
        return null;
    }

    const uri = `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.IMAGE_SIZES.poster}${path}`;

    return (
        <Image
            source={{ uri }}
            style={[{ width, height }, style]}
            resizeMode="cover"
        />
    );
};
