import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const TestTsRestSchema = z.object({
  message: z.string(),
});

/**
 * Represents the TestTsRestRoute.
 */
export const TestTsRestRoute = c.router({
  /**
   * Retrieves a message based on the display name.
   * @param displayName - The display name.
   * @returns A nullable TestTsRestSchema object.
   */
  getMessage: {
    method: 'GET',
    path: '/test-ts-rest/:displayName',
    responses: {
      200: TestTsRestSchema.nullable(),
    },
    summary: 'TestTsRestRoute',
  },
});
