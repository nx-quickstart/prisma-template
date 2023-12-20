import { Module } from '@nestjs/common';
import { TestTsRestModule } from '@nx-starter-template/nx-starter-template-test-ts-rest';

@Module({
  imports: [TestTsRestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
