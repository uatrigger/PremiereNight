import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export type IconProps = {
    size: number;
    color: string;
};

export const ChevronLeft = ({ size, color }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M15 18L9 12L15 6"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const ChevronRight = ({ size, color }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M9 18L15 12L9 6"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const StarOutline = ({ size, color }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M12 3L14.9 8.9L21.4 9.7L16.7 14.2L17.9 20.7L12 17.6L6.1 20.7L7.3 14.2L2.6 9.7L9.1 8.9L12 3Z"
            stroke={color}
            strokeWidth={2}
            strokeLinejoin="round"
        />
    </Svg>
);

export const StarFilled = ({ size, color }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M12 3L14.9 8.9L21.4 9.7L16.7 14.2L17.9 20.7L12 17.6L6.1 20.7L7.3 14.2L2.6 9.7L9.1 8.9L12 3Z"
            fill={color}
        />
    </Svg>
);

export const TrashIcon = ({
    size = 24,
    color = 'currentColor',
}) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Rect
            x="5"
            y="7"
            width="14"
            height="14"
            rx="2"
            stroke={color}
            strokeWidth={2}
        />

        <Path
            d="M3 7H21"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />

        <Path
            d="M9 4H15"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />

        <Path
            d="M10 11V17"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M14 11V17"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
);