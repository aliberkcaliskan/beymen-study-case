import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FilterComponent } from '../../components/filter/filter.component';
import { OrderTableComponent } from '../../components/order-table/order-table.component';
import { DashboardData, Order } from '../../interface/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    DashboardComponent, FilterComponent, OrderTableComponent
  ],
})
export class HomeComponent implements OnInit {
  headerData: DashboardData | null = null;
  tableData: Order[] = [];
  pageSize = 5;
  pageNumber = 1;
  totalRecords = 30;
  filters: any = {};
  loading = false;

  constructor(private orderService: OrderService) { }

  ngOnInit () {
    this.loadDashboard();
    this.loadOrders();
  }

  loadDashboard () {
    this.orderService.getDashboardData().subscribe(response => {
      this.headerData = response;
    });
  }

  loadOrders () {
    this.loading = true;
    this.orderService.getOrders(this.pageNumber, this.pageSize, this.filters).subscribe(response => {
      this.tableData = response.data || [];
      this.totalRecords = response.total || 0;
      this.loading = false;
    }, error => {
      console.error('API Hatası:', error);
      this.loading = false;
    });
  }

  handleFilterChange (filters: any) {
    this.filters = filters;
    this.pageNumber = 1;
    this.loadOrders();
  }

  onPageChange (page: number) {
    this.pageNumber = page;
    this.loadOrders();
  }
}
