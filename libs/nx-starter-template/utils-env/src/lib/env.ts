import { createEnv } from '@t3-oss/env-core';
import { z as zod } from 'zod';

/**
 * Represents the environment configuration object.
 */
export const env = createEnv({
  server: {
    /**
     * The URL for the MySQL Prisma connection.
     */
    DATABASE_PRISMA_URL: zod.string().url(),
  },
  runtimeEnv: process.env,
});
