# **Proje Açıklama Dökümanı**

## **Proje Adı:** Kurumsal Ünvan Yönetim ve Sipariş Takip Sistemi

## **Proje Açıklaması**

Bu proje, bir organizasyonda çalışanların ünvanlarını yönetmek, ilgili dokümanlarını görüntülemek ve güncellemek amacıyla geliştirilmiş bir **"Ünvan Yönetimi"** modülü ile **"Sipariş Takip"** modülünü içermektedir.

Projede **Angular** framework'ü kullanılarak modern ve modüler bir yapı oluşturulmuştur. **Ng-Zorro** kütüphanesi ile şık ve fonksiyonel bir kullanıcı arayüzü sağlanmıştır.

## **Kullanılan Teknolojiler**

### **Frontend:**

- **Angular 19** - SPA (Single Page Application) olarak geliştirilmiştir.
- **TypeScript** - Daha güvenli ve ölçeklenebilir bir yapı için kullanılmıştır.
- **Ng-Zorro Ant Design** - Kullanıcı arayüzü bileşenleri için.
- **GoJS (gojs-angular)** - Organizasyon diyagramları için kullanılmıştır.

### **Backend:**

- **JSON Server** - API çağrıları ve veri saklama için mock backend olarak kullanılmıştır.

### **Veritabanı:**

- **JSON veritabanı** (Mock Data) kullanılmıştır.

---

## **Modüller ve Özellikler**

### **1. Ünvan Yönetimi Modülü**

Bu modül, organizasyondaki çalışanların **hiyerarşik yapısını** bir **organizasyon diyagramı** üzerinden yönetmeyi sağlar.

#### **Özellikler:**

- **📌 Organizasyon Şeması:** GoJS ile yönetici ve çalışanların ağaç yapısında görüntülenmesi.
- **📄 PDF Doküman Yönetimi:** Her çalışana ait PDF dosyasını görüntüleme ve yeni bir PDF yükleme.
- **🖼️ Profil Fotoğrafı:** Çalışanların placeholder bir profil görseli ile sunulması.
- **🖱️ Kullanıcı Etkileşimi:** Tıklanan kişinin verisinin detaylı olarak gösterilmesi.
- **📱 Responsive Tasarım:** Farklı ekran boyutlarına uygun esnek yapı.

---

### **2. Sipariş Takip Modülü**

Bu modül, şirketin sipariş süreçlerini **görüntüleme**, **filtreleme**, **detaylandırma** ve **paging** işlemleriyle yönetmeyi sağlar.

#### **Özellikler:**

- **🗂️ Sipariş Listesi:** Siparişleri listeleme, sıralama ve filtreleme.
- **🔍 Gelişmiş Filtreleme:** Gönderi takip numarası, sipariş numarası, plaka, tarih aralığı, dağıtım durumu ve sipariş durumu ile filtreleme.
- **📄 Sayfalama (Pagination):** JSON Server'dan veri çekerken **pageSize ve pageNumber** parametreleri ile çalışan server-side pagination.
- **📊 Dashboard:** Özet bilgileri içeren yönetim ekranı.
- **📜 Detay Sayfası:** Sipariş detaylarını görüntüleme.

---

## **JSON Server Kullanımı**

Proje geliştirirken **mock API** olarak **JSON Server** kullanılmıştır.

### **📌 Başlatma Komutları:**

```sh
npm run json-server  # JSON Server'ı başlatır
npm start           # Angular Projesini Başlatır
```

### **📌 Kullanılan API Endpoint'leri**

| İşlem              | URL                              |
| ------------------ | -------------------------------- |
| Dashboard Verisi   | `GET /dashboard`                 |
| Sipariş Listesi    | `GET /order?_page=1&_per_page=5` |
| Sipariş Filtreleme | `GET /order?status=1`            |
| Sipariş Detay      | `GET /order/:id`                 |

---

## **Sonuç ve Kullanım**

Bu proje, **şirket içi sipariş takip sistemini** ve **organizasyon yönetimini** tek bir çatı altında toplamak için oluşturulmuştur.


#
