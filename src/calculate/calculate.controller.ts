import { Controller, Post, Body } from '@nestjs/common';

@Controller('calculate')
export class CalculateController {
  @Post()
  calculate(@Body() body: { input1: number; input2: number }) {
    const { input1, input2 } = body;
    const result = input1 * input2;
    return { result };
  }
}
