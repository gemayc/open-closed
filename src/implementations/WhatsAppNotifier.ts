import { Notifier } from '../abstractions/Notifier';

export class WhatsAppNotifier implements Notifier {
  send(message: string): void {
    console.log(`💬 Enviando WhatsApp: ${message}`);
  }
}
