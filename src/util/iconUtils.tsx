import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import React, {JSX} from 'react';

const ALL_ICONS = { ...FaIcons, ...SiIcons };

export const getIcon = (iconName?: string): JSX.Element | undefined => {
  const Icon = iconName ? ALL_ICONS[iconName as keyof typeof ALL_ICONS] : undefined;
  return Icon ? <Icon/> : undefined;
};
