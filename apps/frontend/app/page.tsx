import { initClient } from '@ts-rest/core';
import { TestTsRestRoute } from '@nx-starter-template/shared-dto-routers';
export default async function Index() {
  const result = await getMessage();

  return (
    <div>
      <p>{result.message}</p>
    </div>
  );
}

/**
 * Retrieves a message from the server.
 * @returns {Promise<{ message: string | null }>} A promise that resolves to an object containing the message or null if an error occurred.
 */
async function getMessage() {
  try {
    const client = initClient(TestTsRestRoute, {
      baseUrl: 'http://localhost:3000/api',
      baseHeaders: {},
    });

    const result = await client.getMessage({
      params: {
        displayName: 'John Doe',
      },
    });

    return {
      message: result.status === 200 ? result.body?.message : null,
    };
  } catch (error) {
    return {
      message: null,
    };
  }
}
