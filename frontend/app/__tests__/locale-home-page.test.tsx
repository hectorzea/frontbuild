import { render, screen } from '@testing-library/react'
import HomePage from '@/app/[locale]/page'

describe('Page', () => {
    it('renders a heading', () => {
        render(<HomePage />)
        expect(screen.getByText('Frontbuild is a repository which contains my personal projects and an overview of my career as developer.')).toBeInTheDocument();
        expect(screen.getByText('Go to my profile')).toBeInTheDocument();
    })
})