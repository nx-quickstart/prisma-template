import { Controller } from '@nestjs/common';
import { TestTsRestRoute } from '@nx-starter-template/shared-dto-routers';
import {
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
  nestControllerContract,
} from '@ts-rest/nest';

const c = nestControllerContract(TestTsRestRoute);
type RequestShape = NestRequestShapes<typeof c>;

/**
 * Controller for handling REST requests related to TestTsRest.
 */
@Controller()
export class TestTsRestController implements NestControllerInterface<typeof c> {
  /**
   * Retrieves a message with the provided display name.
   * @param displayName - The display name to include in the message.
   * @returns An object containing the status and body of the response.
   */
  @TsRest(c.getMessage)
  async getMessage(
    @TsRestRequest() { params: { displayName } }: RequestShape['getMessage']
  ) {
    return {
      status: 200 as const,
      body: {
        message: `Hello ${displayName}`,
      },
    };
  }
}
