import React from 'react';
import { render } from '@testing-library/react';

import Player from './components/Player';

test('player renders without crashing', async () => {
  await render(<Player />);
  
});