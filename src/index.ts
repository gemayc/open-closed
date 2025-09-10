import { Notifier } from './abstractions/Notifier';
import { EmailNotifier } from './implementations/EmailNotifier';
import { SMSNotifier } from './implementations/SMSNotifier';
import { WhatsAppNotifier } from './implementations/WhatsAppNotifier';
import { TelegramNotifier } from './implementations/TelegramNotifier';

// Motor: usa SOLO la abstracción Notifier
function notify(channel: Notifier, message: string) {
  channel.send(message);
}

// Inyectamos las implementaciones
const email = new EmailNotifier();
const sms = new SMSNotifier();
const whatsapp = new WhatsAppNotifier();
const telegram = new TelegramNotifier();

notify(email, "Hola, Gema (por Email) ✉️");
notify(sms, "Recordatorio: práctica OCP hoy a las 18:00 ⏰");
notify(whatsapp, "¡OCP te hace la vida más fácil! 🚀");
notify(telegram, "Hola por Telegram (OCP)!");
