import React from 'react'
import { http, HttpResponse } from 'msw'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/app/test-utils'
import { taskSchema } from '@/app/schemas'

test('Test schema with all valid data ', async () => {
    expect(() => taskSchema.parse({ title: 'do something', status: 'todo', label: 'epic', priority: 'low' })).not.toThrow();
});

test('Test schema with required title', async () => {
    expect(() => taskSchema.parse({ title: '' })).toThrow("Title is required");
});

test('Test schema with invalid status', async () => {
    expect(() => taskSchema.parse({ title: 'do something', status: 'todos-s', label: 'something', priority: 'low' })).toThrow("Invalid status");
});