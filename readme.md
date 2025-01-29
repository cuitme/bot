# Discord Automation Bot

## 📌 Overview

Discord Automation Bot adalah bot yang dirancang untuk mengotomatisasi tugas-tugas di server Discord, seperti moderasi, logging, dan respons otomatis terhadap perintah tertentu.

## ⚡ Features

- 🔹 **Moderasi Otomatis** (ban, kick, mute)
- 🔹 **Logging Aktivitas** menggunakan Winston
- 🔹 **Auto Responder** untuk pesan tertentu
- 🔹 **Command Handler** berbasis prefix atau slash command
- 🔹 **Integrasi API Eksternal**

## 📦 Installation

### 1. Clone Repository

```sh
git clone https://github.com/username/discord-automation-bot.git
cd discord-automation-bot
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Buat File `.env`

Buat file `.env` di root proyek dan tambahkan:

```env
TOKEN=your-bot-token
PREFIX=!
LOG_LEVEL=info
```

### 4. Jalankan Bot

```sh
node index.js
```

## 🛠 Configuration

### Logging (Menggunakan Library [Winston](https://github.com/winstonjs/winston))

Logger diatur dalam `logger.js` dan dapat dikonfigurasi sesuai kebutuhan:

```javascript
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = logger;
```

Tambahkan logging di kode bot seperti:

```javascript
logger.info('Bot berhasil dijalankan');
```

## 📜 Commands

| Command       | Description                   |
| ------------- | ----------------------------- |
| `!ping`       | Mengecek status bot           |
| `!kick @user` | Mengeluarkan user dari server |
| `!ban @user`  | Mem-banned user dari server   |
| `!log`        | Menampilkan log aktivitas     |

## 🚀 Deployment

Untuk menjalankan bot 24/7, gunakan layanan seperti:

- **PM2**: `pm2 start index.js --name "discord-bot"`
- **Heroku** / **Railway** / **VPS**

## 🔗 License

Proyek ini menggunakan lisensi **MIT**. Anda bebas untuk mengembangkan dan menggunakannya sesuai kebutuhan.

---

💡 *Dikembangkan oleh [cuitme]*

