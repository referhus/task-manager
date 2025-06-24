import { Controller, Get } from '@nestjs/common';
import { tasks } from './task.data';

@Controller('/api/tasks')
export class TaskController {
  @Get()
  getTasks() {
    return { data: { tasks } };
  }
}
