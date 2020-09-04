import React from 'react';
import { render } from '@testing-library/react';
import AdvanceSearch from './AdvanceSearch';

it('Adult guest should be 1 by default', () => {
    const { getByText } = render(<AdvanceSearch />);
    const labelElement = getByText(/Adult 1/i);
    expect(labelElement).toBeInTheDocument(); 
});
