import { render, screen } from '@testing-library/react'
import ProfileIndexPage from '@/app/[lang]/profile/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<ProfileIndexPage />)
    expect(screen.getByText('I am a highly adaptable problem-solver with a strong technical skillset, capable of quickly learning and contributing in new environments.')).toBeInTheDocument();
  })
})