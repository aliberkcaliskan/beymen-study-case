import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Order } from '../../interface/interface';
import { OrderStatusEnum } from '../../enum/order-status.enum';

@Component({
    selector: 'app-order-detail',
    standalone: true,
    imports: [
        CommonModule,
        NzCardModule,
        NzSpinModule, NzTagModule,
        NzButtonModule, RouterLink
    ],
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
    orderId: number | null = null;
    orderData: Order | null = null;
    loading: boolean = true;

    constructor(private route: ActivatedRoute, private orderService: OrderService) {}

    ngOnInit (): void {
        this.route.paramMap.subscribe(params => {
            this.orderId = Number(params.get('id'));
            if (this.orderId) {
                this.fetchOrderDetails();
            }
        });
    }

    fetchOrderDetails (): void {
        this.orderService.getOrderById(this.orderId!).subscribe(
            (order: Order[]) => {
                if (order[0]) {
                    this.orderData = order[0];
                }
                this.loading = false;
            },
            error => {
                console.error('Sipariş verisi alınamadı:', error);
                this.loading = false;
            }
        );
    }

    getStatusColor (status: number | undefined): string {
        if (!status) return 'default';
        switch (Number(status)) {
            case OrderStatusEnum.Oluşturuldu: return 'blue';
            case OrderStatusEnum['İptal Edildi']: return 'red';
            case OrderStatusEnum["Teslim Edildi"]: return 'green';
            case OrderStatusEnum.Bekliyor: return 'gold';
            case OrderStatusEnum["Teslim Edilemedi"]: return 'volcano';
            default: return 'default';
        }
    }

    getStatusText (status: number | undefined): string {
        if (!status) return 'Bilinmeyen';
        return OrderStatusEnum[status] || 'Bilinmeyen';
    }
}
