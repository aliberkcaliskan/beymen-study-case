import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule, } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { OrderStatusEnum } from '../../enum/order-status.enum';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Order } from '../../interface/interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    NzTagModule, NzPaginationModule,
  ],

  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})

export class OrderTableComponent {
  @Input() tableData: Order[] = [];
  @Input() totalRecords: number = 0;
  @Input() loading: boolean = false;
  @Input() pageSize: number = 5;
  @Input() pageNumber: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  constructor(private router: Router) { }
  getStatusColor (status: number): string {
    switch (Number(status)) {
      case OrderStatusEnum.Oluşturuldu: return 'blue';
      case OrderStatusEnum['İptal Edildi']: return 'red';
      case OrderStatusEnum["Teslim Edildi"]: return 'green';
      case OrderStatusEnum.Bekliyor: return 'gold';
      case OrderStatusEnum["Teslim Edilemedi"]: return 'volcano';
      default: return 'default';
    }
  }

  getStatusText (status: number): string {
    return OrderStatusEnum[status] || 'Bilinmeyen';
  }

  onPageChange (page: number) {

    this.pageChange.emit(page);
  }
  goToDetails (orderNo: number) {
    this.router.navigate(['/order-detail', orderNo]);
  }
}
