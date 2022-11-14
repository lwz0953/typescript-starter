import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        console.log('222');
        return this.appService.getHello();
    }

    @Get('/test')
    getTest(): string {
        console.log('this is a test');
        return this.appService.getTest();
    }
}
