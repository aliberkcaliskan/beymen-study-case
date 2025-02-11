import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { TitleDocumentsComponent } from './pages/title-documents/title-documents.component';



export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Sipariş Kontrol Ekranı' } },
  { path: 'home', component: HomeComponent, data: { title: 'Sipariş Listesi' } },
  { path: 'title-documents', component: TitleDocumentsComponent, data: { title: 'Ünvan Yönetimi' } },
  { path: 'order-detail/:id', component: OrderDetailComponent, data: { title: 'Sipariş Detay' } },
  { path: '**', redirectTo: '' }
];