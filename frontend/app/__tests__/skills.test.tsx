import { render, screen } from '@testing-library/react'
import SkillsPage from '@/app/profile/skills/page'

describe('TestingPage', () => {
  it('renders TestingPage component', () => {
    render(<SkillsPage />)
    expect(screen.getByText('Software Engineer at FRIDAY Insurance')).toBeInTheDocument();
  })
})