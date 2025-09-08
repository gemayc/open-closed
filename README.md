# Proyecto Open/Closed (OCP) – TypeScript

Este repositorio contiene un ejemplo práctico en **TypeScript** para entender el **principio Open/Closed (OCP)**, parte de los principios **SOLID**.

## 📖 Descripción

El proyecto muestra cómo aplicar OCP con un sistema de **notificaciones** (Email, SMS, WhatsApp, etc.):

* **Abierto a la extensión** → se pueden añadir nuevos tipos de notificación (ej. Telegram) creando una clase nueva.
* **Cerrado a la modificación** → no es necesario cambiar el código ya existente (la función `notify` no se toca).

Además, aquí se subirá también la **presentación en Canva** usada para explicar el concepto.

## 🚀 Tecnologías

* Node.js
* TypeScript
* Git & GitHub

## 📂 Estructura

```
open-closed/
├── src/
│   ├── abstractions/     # Interfaces (contratos comunes)
│   ├── implementations/  # Clases concretas (Email, SMS, WhatsApp...)
│   └── index.ts          # Motor principal notify()
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## ▶️ Cómo ejecutar

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/open-closed.git
   cd open-closed
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Ejecutar en desarrollo:

   ```bash
   npm run dev
   ```
4. Compilar y ejecutar en JavaScript:

   ```bash
   npm run build
   npm start
   ```

## 🎯 Objetivo

* Practicar el principio **Open/Closed** con un ejemplo sencillo.

---

## 👩‍💻 Autora

Gema Yébenes Caballero
LinkedIn

✨ Proyecto creado como parte de la formación en desarrollo Fullstack.
