import { renderHook, waitFor } from "@testing-library/react";
import { useMsw } from "../useMsw";
import * as SetupMocks from '@/app/mocks/setupMocks'; // Importa setUpMocksclear

// Mock de setUpMocks
jest.mock('@/app/mocks/setupMocks', () => ({
    setUpMocks: jest.fn(),
}));

describe('useMsw', () => {
    it('should initialize with isMswReady in false', async () => {
        process.env.NEXT_PUBLIC_ENABLE_MSW = 'true';
        const { result } = renderHook(() => useMsw());
        await waitFor(() => {
            expect(result.current).toBe(true);
            expect(SetupMocks.setUpMocks).toHaveBeenCalled();
        });
    });
})