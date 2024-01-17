import { Module } from '@nestjs/common';
import { TestTsRestController } from './test-ts-rest.controller';

@Module({
  controllers: [TestTsRestController],
  providers: [],
  exports: [],
})
export class TestTsRestModule {}
