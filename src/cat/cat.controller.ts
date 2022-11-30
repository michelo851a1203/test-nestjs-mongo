import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cat')
export class CatController {
  constructor(@Inject(CatService) private catService: CatService) {}

  @Get('/')
  getAllCatRoute(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Post('/')
  addCatRoute(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    console.log(createCatDto);
    return this.catService.create(createCatDto);
  }
}
