import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { DashboardData } from '../../interface/interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzGridModule, NzProgressModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  @Input() headerData: DashboardData | null = null;

  getCompletionPercentage (): number {
    if (!this.headerData || !this.headerData?.completedOrder) return 0;
    const [completed, total] = this.headerData?.completedOrder.split('/').map(Number);
    return total > 0 ? (completed / total) * 50 : 0;
  }

  getStatusColor (type: string): string {
    const colors: any = {
      packetRoute: '#1890ff',
      DMPackageCount: '#722ed1',
      packageReleased: '#13c2c2',
      delivered: '#52c41a',
      notDelivered: '#fa541c',
    };
    return colors[type] || '#1890ff';
  }
}
