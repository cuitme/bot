
# BOT-DISCORD 
Paket ini adalah pembungkus kuat untuk Discord API v10, dirancang untuk memudahkan interaksi dengan fitur Discord termasuk manajemen pesan, operasi kanal, pengelolaan peran, dan lainnya.

## Fitur

- Penanganan menyeluruh untuk pesan, kanal, peran server, dan reaksi
- Manajemen webhook dan emoji
- Kontrol status pengguna dan pengiriman pesan langsung
- Pengambilan log audit

## Instalasi

```bash
npm install discord-simple-api
```

## Penggunaan

Berikut cara menggunakan Discord-Simple-API:

```javascript
const Discord = require('discord-simple-api');
const discordClient = new Discord('YOUR_DISCORD_BOT_TOKEN');
```

Untuk mendapatkan token Discord Anda, tempelkan kode berikut ke bilah URL browser saat Discord terbuka di web:

```javascript
javascript:var i = document.createElement('iframe');i.onload = function(){var localStorage = i.contentWindow.localStorage;prompt('Discord get token by Dante4rt', localStorage.getItem('token').replace(/["""+]/g, ''));};document.body.appendChild(i);
```

## Fungsi Fitur

- **getUserInformation()**

  Mendapatkan informasi pengguna yang diautentikasi dari token.

  ```javascript
  discordClient.getUserInformation().then(user => {
      console.log(user);
  }).catch(err => {
      console.error(err);
  });
  ```

- **getMessagesInChannel()**

  Mengambil pesan dari kanal tertentu.

  ```javascript
  discordClient.getMessagesInChannel('channelId', 10).then(messages => {
      console.log(messages);
  }).catch(err => {
      console.error(err);
  });
  ```

- **sendMessageToChannel()**

  Mengirim pesan ke kanal tertentu.

  ```javascript
  discordClient.sendMessageToChannel('channelId', 'Halo, Discord!').then(message => {
      console.log('Pesan terkirim:', message);
  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteMessageInChannel()**

  Menghapus pesan tertentu dari kanal.

  ```javascript
  discordClient.deleteMessageInChannel('channelId', 'messageId').then(response => {
      console.log('Pesan dihapus:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **joinGuildByInvite()**

  Bergabung dengan server menggunakan kode undangan.

  ```javascript
  discordClient.joinGuildByInvite('inviteCode').then(guild => {
      console.log('Bergabung dengan server:', guild);
  }).catch(err => {
      console.error(err);
  });
  ```

- **leaveGuild()**

  Keluar dari server tertentu.

  ```javascript
  discordClient.leaveGuild('guildId').then(response => {
      console.log('Keluar dari server:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **muteMemberInVoiceChannel()**

  Membisukan anggota di kanal suara.

  ```javascript
  discordClient.muteMemberInVoiceChannel('guildId', 'memberId', true).then(response => {
      console.log('Anggota dibisukan:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **createChannel()**

  Membuat kanal baru di server.

  ```javascript
  discordClient.createChannel('guildId', { name: 'new-channel', type: 0 }).then(channel => {
      console.log('Kanal dibuat:', channel);
  }).catch(err => {
      console.error(err);
  });
  ```

- **updateChannel()**

  Memperbarui informasi kanal tertentu.

  ```javascript
  discordClient.updateChannel('channelId', { name: 'updated-channel' }).then(channel => {
      console.log('Kanal diperbarui:', channel);
  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteChannel()**

  Menghapus kanal tertentu.

  ```javascript
  discordClient.deleteChannel('channelId').then(response => {
      console.log('Kanal dihapus:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **addReaction()**

  Menambahkan reaksi ke pesan.

  ```javascript
  discordClient.addReaction('channelId', 'messageId', '😀').then(response => {
      console.log('Reaksi ditambahkan:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **removeReaction()**

  Menghapus reaksi dari pesan.

  ```javascript
  discordClient.removeReaction('channelId', 'messageId', '😀').then(response => {
      console.log('Reaksi dihapus:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **createWebhook()**

  Membuat webhook di kanal.

  ```javascript
  discordClient.createWebhook('channelId', { name: 'new-webhook' }).then(webhook => {
      console.log('Webhook dibuat:', webhook);
  }).catch(err => {
      console.error(err);
  });
  ```

- **deleteWebhook()**

  Menghapus webhook tertentu.

  ```javascript
  discordClient.deleteWebhook('webhookId').then(response => {
      console.log('Webhook dihapus:', response);
  }).catch(err => {
      console.error(err);
  });
  ```

- **listGuildEmojis()**

  Menampilkan semua emoji dari server.

  ```javascript
  discordClient.listGuildEmojis('guildId').then(emojis => {
      console.log('Emoji server:', emojis);
  }).catch(err => {
      console.error(err);
  });
  ```

- **sendDirectMessage()**

  Mengirim pesan langsung ke pengguna.

  ```javascript
  discordClient.sendDirectMessage('userId', { content: 'Halo!' }).then(message => {
      console.log('Pesan terkirim:', message);
  }).catch(err => {
      console.error(err);
  });
  ```

- **getAuditLogs()**

  Mengambil log audit dari server.

  ```javascript
  discordClient.getAuditLogs('guildId').then(logs => {
      console.log('Log audit:', logs);
  }).catch(err => {
      console.error(err);
  });
  ```

## Kontribusi

Kontribusi sangat disambut! Jika Anda tertarik untuk membantu, silakan baca pedoman kontribusi kami.

## Lisensi

Proyek ini dilisensikan di bawah **Lisensi ISC** - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

