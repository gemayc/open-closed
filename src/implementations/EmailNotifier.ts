import { Notifier } from '../abstractions/Notifier';

export class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`📧 Enviando EMAIL: ${message}`);
  }
}
