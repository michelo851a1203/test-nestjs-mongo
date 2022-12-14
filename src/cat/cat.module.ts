import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { GearModule } from './gear/gear.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cat.name,
        schema: CatSchema,
      },
    ]),
    GearModule,
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
