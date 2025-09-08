import { Notifier } from '../abstractions/Notifier';

export class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`📱 Enviando SMS: ${message}`);
  }
}
