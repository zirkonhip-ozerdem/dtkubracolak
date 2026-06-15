# 🚀 Proje Çalışma Protokolü (VS Code & Git Flow)

Arkadaşlar selam! 🌟

Projeyi hem öğrenmek hem de profesyonel şekilde katkı sağlamak için ekip olarak aşağıdaki Git çalışma düzenini kullanacağız.

Projemizde:

* `dev` → Ortak geliştirme alanımız
* Kişisel branch → Her geliştiricinin kendi çalışma alanı

olarak kullanılacaktır.

⚠️ Bu projede `main/master` kullanılmayacaktır.

Tüm geliştirme süreci:

```text
dev
 ↓
kişisel branch
 ↓
dev
```

akışıyla ilerleyecektir.

---

# 🛠 AŞAMA 1: Öğrenme ve Kurcalama (Local Deneme)

Bu aşamadaki amaç projeyi tanımak, kod yapısını incelemek ve rahatça deneme yapmaktır.

---

# 1. Projeyi İndirin

GitHub üzerinden projeyi indirebilirsiniz.

Terminal:

```bash
git clone https://github.com/zirkonhip-ozerdem/dtkubracolak.git
```

---

# 2. Git Bağlantısını Kopar (Deneme İçin)

İndirdiğiniz proje klasörünün içinde:

```text
.git
```

klasörünü silebilirsiniz.

Bu aşamada:

* Kodları inceleyin
* Dosyaları kurcalayın
* Testleri çalıştırın
* Denemeler yapın

Amaç projeyi anlamaktır.

---

# 3. VS Code ile Açın

Projeyi VS Code ile açın.

Kontrol edin:

* Dosya yapısı
* Kullanılan teknolojiler
* Test yapısı
* Proje akışı

---

# 💻 AŞAMA 2: Gerçek Katkı Süreci

Artık gerçek geliştirme sürecine geçiyoruz.

---

# 1. Projeyi Clone Et

VS Code:

```text
Ctrl + Shift + P
```

→

```text
Git: Clone
```

Proje:

```text
https://github.com/zirkonhip-ozerdem/dtkubracolak.git
```

---

# 2. Ortak Dev Kodlarını Güncelle

Önce dev branch'e geç:

```bash
git checkout dev
```

Son güncel kodları al:

```bash
git pull origin dev
```

Artık bilgisayarındaki kodlar ortak havuzun son halidir.

---

# 3. Kendi Branch'ine Geç

Eğer branch'in yoksa oluştur:

```bash
git checkout -b [branch-adin]
```

Örnek:

```bash
git checkout -b ceren-login-test
```

Kontrol:

```bash
git branch
```

Yanında `*` olan aktif branch'tir.

---

# 4. Çalışmaya Başlamadan Önce Dev'i Al

Kendi branch'indeyken:

```bash
git merge dev
```

Bu işlem seni güncel kodla çalıştırır.

---

# 5. Kodlama ve Test Süreci

Artık kendi alanındasın.

Burada:

✅ Kod yaz  
✅ Test ekle  
✅ Düzenleme yap  
✅ Lokal testlerini çalıştır

### Projeyi Local'de Çalıştırma

Kodların tarayıcıda nasıl göründüğünü kontrol etmek için projeyi ayağa kaldırın:

```bash
npm run dev
```

Uygulama başarıyla açıldıktan sonra tarayıcı üzerinden geliştirmelerinizi test edebilirsiniz.

---

# 6. Değişiklikleri Kaydet

Önce kontrol:

```bash
git status
```

Dosya ekleme:

```bash
git add .
```

veya:

```bash
git add dosya_yolu
```

### ⚠️ PowerShell Kullanıcıları İçin Önemli Not

Belirli dosyaları tek tek eklemek istiyorsanız ve dosya yolunda:

* `(site)`
* `[lang]`

gibi özel karakterler bulunuyorsa, Windows PowerShell hata verebilir.

Bu durumda dosya yolunu mutlaka çift tırnak içine alın:

```bash
git add "app/(site)/[lang]/blog/page.tsx"
```

Commit:

```bash
git commit -m "feat: açıklama"
```

Örnek:

```bash
git commit -m "feat: login testi eklendi"
```

---

# 7. Kendi Branch'ini Pushla

```bash
git push origin [branch-adin]
```

Örnek:

```bash
git push origin ceren-login-test
```

Artık kendi branch'in GitHub'da güncel.

---

## ⚠️ GitHub'daki Yeşil Buton Hakkında

Kendi branch'inizi pushladıktan sonra GitHub üzerinde karşınıza:

```text
Compare & pull request
```

şeklinde yeşil bir buton çıkabilir.

⚠️ **ÇOK KRİTİK NOT**

Bu projede `main/master` kullanılmadığı için bu butona rastgele tıklamıyoruz.

Gerekirse:

```text
Dismiss
```

diyerek kapatıyoruz.

Pull Request süreçleri ekip içinde ayrıca duyurulacaktır.

---

# 🚀 Son Aşama: Dev'e Kod Aktarma

Kodları ortak havuza almak için:

---

## 1. Dev'e Geç

```bash
git checkout dev
```

---

## 2. Tekrar Güncelle

```bash
git pull origin dev
```

---

## 3. Kendi Branch'ini Dev'e Birleştir

```bash
git merge [branch-adin]
```

Örnek:

```bash
git merge ceren-login-test
```

---

## 4. Dev'i GitHub'a Gönder

```bash
git push origin dev
```

🎉 Ortak geliştirme alanı güncellendi.

---

# ⚠️ Kritik Kurallar

## ❌ Main / Master Kullanılmayacak

Bu projede:

```text
main
master
```

branchleri kullanılmaz.

Tüm geliştirmeler:

```text
dev
```

branch'i üzerinden yürütülür.

---

## ⚠️ Conflict Durumu

Conflict olursa:

1. Panik yapmayın
2. Kodları rastgele silmeyin
3. VS Code conflict alanlarını inceleyin
4. Ekibe haber verin
5. Çözemiyorsanız merge işlemini durdurup destek isteyin

---

## 📢 Dev Push Öncesi Haber Verin

Dev'e göndermeden önce:

> Arkadaşlar görevimi bitirdim, dev'e merge edip pushluyorum.

şeklinde haberleşelim.

Bu sayede aynı anda yapılan işlemlerden kaynaklı conflict riskini azaltmış oluruz.

---

# 🎯 Son Not

Amacımız:

* Git öğrenmek
* Takım çalışmasına alışmak
* QA/SDET proje düzenini deneyimlemek
* Gerçek proje disiplininde çalışmak
* Güvenli ve sürdürülebilir bir geliştirme süreci oluşturmak

Herkese iyi çalışmalar 🚀