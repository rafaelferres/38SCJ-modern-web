import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Index from '../pages/index'

describe('Index', () => {
  it('should index render without error', () => {
    render(<Index />)
    expect(screen.getByText('Test')).toBeInstanceOf(Node)
  })
})
