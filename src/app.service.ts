import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getChat(): string {
    return 'New Chat App!';
  }
}
