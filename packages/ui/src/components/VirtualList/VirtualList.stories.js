import React from 'react';
import { storiesOf } from '@storybook/react';

import VirtualList from '.';

storiesOf('Components | VirtualList', module)
    .add('default', () => {return <VirtualList></VirtualList>});