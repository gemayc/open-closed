"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotifier_1 = require("./implementations/EmailNotifier");
const SMSNotifier_1 = require("./implementations/SMSNotifier");
const WhatsAppNotifier_1 = require("./implementations/WhatsAppNotifier");
// Motor: usa SOLO la abstracción Notifier
function notify(channel, message) {
    channel.send(message);
}
// Inyectamos las implementaciones
const email = new EmailNotifier_1.EmailNotifier();
const sms = new SMSNotifier_1.SMSNotifier();
const whatsapp = new WhatsAppNotifier_1.WhatsAppNotifier();
notify(email, "Hola, Gema (por Email) ✉️");
notify(sms, "Recordatorio: práctica OCP hoy a las 18:00 ⏰");
notify(whatsapp, "¡OCP te hace la vida más fácil! 🚀");
