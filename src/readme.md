# Discord API v10 - REST Client (VSCode)

Dokumen ini berisi panduan lengkap untuk mengakses Discord API menggunakan **REST Client di VSCode**.

---

## 📌 1. Instalasi REST Client di VSCode
1. Buka **VSCode**.
2. Pergi ke **Extensions (Ctrl + Shift + X)**.
3. Cari **"REST Client"** oleh Huachao Mao.
4. Klik **Install**.

---

## 📌 2. Cara Mendapatkan Bot Token
1. Buka [Discord Developer Portal](https://discord.com/developers/applications).
2. Pilih aplikasi bot Anda.
3. Masuk ke **tab "Bot"**.
4. Klik **"Reset Token"** untuk mendapatkan token baru.
5. **Simpan token ini dengan aman!** (Jangan pernah membagikannya!)

---

## 📌 3. Cara Mendapatkan Channel ID
1. Buka **Discord**.
2. Aktifkan **Developer Mode**:
   - **Settings** → **Advanced** → **Enable Developer Mode**.
3. Klik kanan pada channel yang ingin digunakan.
4. Pilih **Copy ID**.

---

## 📌 4. Contoh Request API di REST Client

### 🔹 **GET: Ambil 50 pesan terakhir dari channel**
```http
GET https://discord.com/api/v10/channels/YOUR_CHANNEL_ID/messages?limit=50
Authorization: Bot YOUR_DISCORD_BOT_TOKEN
