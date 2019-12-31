import React from 'react';
import { storiesOf } from '@storybook/react';

import ItemList from '.';

storiesOf('Components | ItemList', module)
    .add('default', () => {return <ItemList></ItemList>});