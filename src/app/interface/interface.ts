export interface Order {
    orderNo: number;                   // Sipariş Numarası
    shipmentTrackingNo: string;        // Gönderi Takip Numarası
    orderTrackingNo: string;           // Sipariş Takip Numarası
    customerName: string;              // Müşteri Adı
    district: string;                  // İlçe
    plate: string;                     // Araç Plaka Numarası
    Statu: number;                     // Sipariş Durumu
    releasedForDistribution: 'EVET' | 'HAYIR'; // Dağıtıma Çıkarıldı mı?
    Date: string;                      //Tarih 
}

export interface DashboardData {
    packetRoute: number;       // Rotadaki Paket Sayısı
    DMPackageCount: number;    // DM Paket Sayısı
    packageReleased: number;   // Dağıtıma Çıkan Paket Sayısı
    delivered: number;         // Teslim Edilen Paket Sayısı
    notDelivered: number;      // Teslim Edilemeyen Paket Sayısı
    completedOrder: string;    // Tamamlanan Sipariş 
}
