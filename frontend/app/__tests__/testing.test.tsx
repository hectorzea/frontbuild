import { render, screen } from '@testing-library/react'
import TestingPage from '@/app/[lang]/profile/testing/page'

describe('TestingPage', () => {
  it('renders TestingPage component', () => {
    render(<TestingPage />)
    expect(screen.getByText('What to test in a Frontend Application?')).toBeInTheDocument();
  })
})