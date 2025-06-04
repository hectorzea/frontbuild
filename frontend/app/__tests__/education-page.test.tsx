import { render, screen } from '@testing-library/react'
import EducationPage from '@/app/[locale]/profile/education/page'

describe('EducationPage', () => {
    it('renders EducationPage Page', () => {
        render(<EducationPage />)
        expect(screen.getByTestId('education-title')).toBeInTheDocument();
    })
})