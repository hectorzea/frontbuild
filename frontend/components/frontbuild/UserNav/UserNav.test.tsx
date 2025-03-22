import React from 'react'
import { UserNav } from '.'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

test('Loads <UserNav /> and navigates and test next router mock', async () => {
    const user = userEvent.setup()
    render(<UserNav />)

    await user.click(screen.getByTestId('user-nav-trigger'))

    expect(screen.getByTestId('profile-navigation-button')).toBeInTheDocument();

    await user.click(screen.getByTestId('profile-navigation-button'))

    expect(mockRouter).toMatchObject({
        asPath: "/profile",
        pathname: "/profile"
    });
})
