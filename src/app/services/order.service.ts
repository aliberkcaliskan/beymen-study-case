import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Order } from '../interface/interface';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/order';
  private dashboardUrl = 'http://localhost:3000/dashboard';

  constructor(private http: HttpClient) { }

  getDashboardData (): Observable<any> {
    return this.http.get<any>(this.dashboardUrl);
  }

  getOrderById (orderId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}?orderNo=${orderId}`)
  }

  getOrders (pageNumber: number, pageSize: number, filters: any = {}): Observable<any> {
    let params = new HttpParams()
      .set('_page', pageNumber.toString())
      .set('_per_page', pageSize.toString()).set('_limit', 5);

    if (filters.trackingNumber) {
      params = params.set('shipmentTrackingNo_like', filters.trackingNumber);
    }
    if (filters.orderNumber) {
      params = params.set('orderTrackingNo_like', filters.orderNumber);
    }
    if (filters.plate) {
      params = params.set('plate_like', filters.plate);
    }
    if (filters.status) {
      params = params.set('Statu', filters.status.toString());
    }
    if (filters.distributionStatus) {
      params = params.set('releasedForDistribution', filters.distributionStatus);
    }

    if (filters.dateRange && filters.dateRange.length === 2) {
      const startDate = new Date(filters.dateRange[0]).toISOString();
      const endDate = new Date(filters.dateRange[1]).toISOString();
      params = params.set('Date_gte', startDate);
      params = params.set('Date_lte', endDate);
    }

    return this.http.get<any>(this.apiUrl, { params, observe: 'response' }).pipe(
      map(response => ({
        data: response.body,
        total: Number(response.headers.get('X-Total-Count')) || 0
      }))
    );
  }

}
