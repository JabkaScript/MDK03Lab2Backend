import {Controller, Post, Body, BadRequestException} from '@nestjs/common';
import { AppService } from './app.service';
import { IForm } from "./app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('form')
  postForm(@Body() form:IForm): boolean {
    if(!form.name || form.name.length<=0){
      throw new BadRequestException()
    }
    if(!form.surname || form.surname.length<=0){
      throw new BadRequestException()
    }
    if(!form.phone || form.phone.length<=0){
      throw new BadRequestException()
    }
    if(!form.city || form.city.length<=0){
      throw new BadRequestException()
    }
    return this.appService.postForm();
  }
}
