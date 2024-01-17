import { Module } from '@nestjs/common';
import { TestTsRestModule } from '@nx-starter-template/backend-test-ts-rest';

@Module({
  imports: [TestTsRestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
