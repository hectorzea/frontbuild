import { render, screen } from '@testing-library/react'
import PersonalInfoPage from '@/app/[locale]/profile/personal-info/page'

describe('PersonalInfoPage', () => {
    it('renders PersonalInfoPage Page', () => {
        render(<PersonalInfoPage />)
        expect(screen.getByTestId('linkedin-navigation-link')).toBeInTheDocument();
        expect(screen.getByTestId('github-navigation-link')).toBeInTheDocument();
    })
})