# API Architecture

Bu projede frontend halen statik veriyle çalışır. API katmanı hazırdır ama public site componentleri bu endpointlere bağlanmamıştır.

## Route Alanları

- `app/api/site/*`: Public site için okunabilir endpointler.
- `app/api/admin/*`: Admin panel için korumalı endpointler.

## Modül Sahipliği

- Tedaviler: `lib/modules/treatments`
- SSS: `lib/modules/faqs`
- Blog: `lib/modules/blog`
- Galeri: `lib/modules/gallery`
- Site ayarları: `lib/modules/settings`
- Medya yükleme: `lib/modules/media`
- Ortak API güvenliği/response/auth: `lib/api`

Her geliştirici kendi modül klasöründe çalışmalı; ortak `lib/api` dosyaları ekipçe konuşulmadan değiştirilmemelidir.

## API Response Formatı

Başarılı:

```json
{
  "success": true,
  "data": {}
}
```

Hatalı:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Açıklama"
  }
}
```

## Kurulum

```bash
cp .env.example .env
npm install
npm run db:generate
npm run db:push
npm run db:seed
```

## Güvenlik

- Admin API endpointleri session cookie ile korunur.
- POST/PUT/PATCH/DELETE istekleri CSRF token ister.
- Login endpointinde rate limit ve başarısız deneme kilidi vardır.
- Rich text alanları servis katmanında sanitize edilir.
- Upload endpointleri admin auth arkasındadır ve görselleri WebP olarak yazar.
