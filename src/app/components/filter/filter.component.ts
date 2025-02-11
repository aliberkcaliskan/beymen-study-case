import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
    selector: 'app-filter',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        NzGridModule,
        NzInputModule,
        NzIconModule,
        NzDatePickerModule,
        NzSelectModule,
        NzButtonModule
    ],
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Output() filterChange = new EventEmitter<any>();
    prefixSearch = 'search';
    filterForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.filterForm = this.fb.group({
            trackingNumber: [''],
            orderNumber: [''],
            plate: [''],
            dateRange: null,
            status: [null],
            distributionStatus: [null]
        });
    }
    resetFilter () {
        this.filterForm.reset();
        this.applyFilter();
    }

    applyFilter () {
        const filterValues = this.filterForm.value;
        this.filterChange.emit(filterValues);
    }
}
