import { render, screen } from '@testing-library/react'
import CraftingSoftware from '@/app/[locale]/profile/crafting-software/page'

describe('CraftingSoftware', () => {
    it('renders CraftingSoftware Page', () => {
        render(<CraftingSoftware />)
        expect(screen.getByText(/By understanding the business we ensure that technical quality goes aligned with company objectives/i)).toBeInTheDocument();
    })
})