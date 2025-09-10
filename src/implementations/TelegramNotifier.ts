import { Notifier } from "../abstractions/Notifier";

export class TelegramNotifier implements Notifier {
  send(message: string): void {
     console.log(`📨 Enviando Telegram: ${message}`);
  }

}
