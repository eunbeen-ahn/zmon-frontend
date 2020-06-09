import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Avatar from '.';

export default {
  title: 'Design System/Atoms',
  component: Avatar,
  decorators: [withKnobs],
};

const avatar = () => {
  return <Avatar name="user name" />;
};

export { avatar };
