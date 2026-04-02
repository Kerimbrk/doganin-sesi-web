# Doganin Sesi Web

Bu proje `React + Vite` ile hazırlanmış statik bir web sitesidir.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne alınır.

## Cloudflare Pages

Bu proje Cloudflare Pages için hazırdır.

Kullanılacak ayarlar:

- Framework preset: `Vite` veya `React (Vite)`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: boş bırakılabilir

Notlar:

- `public/_redirects` dosyası mevcut olduğu için SPA yönlendirmesi hazırdır.
- Her yeni `main` push işleminde Cloudflare Pages otomatik deploy alabilir.
- Proje yayınlandıktan sonra varsayılan alan adı `*.pages.dev` olacaktır.

## Kaynak

Cloudflare Pages resmi dokümanına göre `React (Vite)` projeleri için build komutu `npm run build`, çıktı klasörü ise `dist` olmalıdır:

- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

## GitHub Pages

Bu repo GitHub Pages için de hazırlanmıştır.

Kullanılan yapı:

- GitHub Pages build sırasında `base` otomatik olarak `/doganin-sesi-web/` olur
- `github.io` alanında yönlendirme sorunu yaşamamak için uygulama `HashRouter` ile açılır
- deploy işlemi `.github/workflows/deploy-github-pages.yml` ile otomatik yapılır

GitHub tarafında açılması gereken ayar:

- `Settings > Pages > Source`
- `GitHub Actions`

Repo:

- `https://github.com/Kerimbrk/doganin-sesi-web`
