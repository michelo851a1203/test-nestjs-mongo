import { Controller, Get } from '@nestjs/common';

@Controller('cat/gear')
export class GearController {
  @Get()
  sayHello() {
    return 'testing hello';
  }
  @Get('/cool')
  sayCool() {
    return 'cool';
  }
}
