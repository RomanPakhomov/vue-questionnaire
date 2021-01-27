import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import QuestionnaireModel from './types/comment.type';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getResults(): QuestionnaireModel[] {
    return this.appService.getResults();
  }

  @Get('result')
  getResult(@Query() req: any) {
    console.log(req.mail)
    return this.appService.getResult(req.mail);
  }

  @Put()
  updateResult(@Body() result: QuestionnaireModel): void {
    return this.appService.updateResult(result);
  }

  @Post()
  saveResult(@Body() result: QuestionnaireModel): void {
    return this.appService.saveResult(result);
  }
}
