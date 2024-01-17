import { Module } from '@nestjs/common';
import { PrismaService } from './data-access-db.service';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DataAccessDbModule {}
