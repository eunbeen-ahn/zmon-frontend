import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Header from './Header';

const stories = storiesOf('Header', module).addDecorator(centered);

stories.add('Default', () => <Header />);
