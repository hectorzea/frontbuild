import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';

// class MockPointerEvent extends Event {
//     button: number;
//     ctrlKey: boolean;
//     pointerType: string;

//     constructor(type: string, props: PointerEventInit) {
//         super(type, props);
//         this.button = props.button || 0;
//         this.ctrlKey = props.ctrlKey || false;
//         this.pointerType = props.pointerType || 'mouse';
//     }
// }

// window.PointerEvent = MockPointerEvent as any;
// window.HTMLElement.prototype.scrollIntoView = jest.fn();
// window.HTMLElement.prototype.releasePointerCapture = jest.fn();
// window.HTMLElement.prototype.hasPointerCapture = jest.fn();

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

const projectDir = process.cwd();
loadEnvConfig(projectDir);