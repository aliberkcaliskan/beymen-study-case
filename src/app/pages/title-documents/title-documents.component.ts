
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as go from 'gojs';
import { DiagramComponent } from 'gojs-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
@Component({
    selector: 'app-title-documents',
    templateUrl: './title-documents.component.html',
    styleUrls: ['./title-documents.component.css'],
    imports: [
        DiagramComponent, NzModalModule, CommonModule, NzButtonModule, NzUploadModule
    ],
})
export class TitleDocumentsComponent implements AfterViewInit {
    @ViewChild('diagramDiv', { static: true }) diagramDiv!: ElementRef;
    public diagram: go.Diagram | null = null;
    isModalVisible = false;
    selectedPdf: SafeResourceUrl | null = null;
    uploadedFiles: { [key: number]: string } = {};
    uploadedPdfUrl: SafeResourceUrl | null = null;
    public nodeDataArray = [
        {
            key: 1, name: 'Yönetim', title: 'Genel Müdür',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 2, parent: 1, name: 'CTO', title: 'Teknoloji Direktörü',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 3, parent: 2, name: 'Yazılım Müdürü', title: 'Yazılım Takımı Lideri',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 4, parent: 3, name: 'Senior Yazılımcı', title: 'Backend Developer',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 5, parent: 3, name: 'Junior Yazılımcı', title: 'Frontend Developer',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 6, parent: 2, name: 'Tasarım Müdürü', title: 'Tasarım Takımı Lideri',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 7, parent: 6, name: 'Senior Tasarımcı', title: 'UX/UI Designer',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 8, parent: 6, name: 'Junior Tasarımcı', title: 'Grafik Tasarımcı',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 9, parent: 1, name: 'CEO', title: 'Şirket Yöneticisi',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 10, parent: 9, name: 'İK Müdürü', title: 'İnsan Kaynakları Müdürü',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 11, parent: 10, name: 'İK Uzmanı', title: 'İK Departmanı',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 12, parent: 9, name: 'Operasyon Müdürü', title: 'Operasyon Takımı',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 13, parent: 12, name: 'Depo Yöneticisi', title: 'Lojistik ve Stok Takibi',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        },
        {
            key: 14, parent: 12, name: 'Temizlik Görevlisi', title: 'Ofis Temizliği',
            pdf: 'https://static.stlflix.com/Low_Poly_Unicorn_Table_Lamp_2dd9695846.pdf',
            image: "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
        }
    ];


    constructor(private message: NzMessageService, private sanitizer: DomSanitizer, private messageService: NzMessageService) { }

    ngAfterViewInit () {
        this.initDiagram();
    }

    initDiagram () {
        const $ = go.GraphObject.make;
        this.diagram = $(go.Diagram, this.diagramDiv.nativeElement, {
            layout: $(go.TreeLayout, { angle: 90, layerSpacing: 30 }),
            isReadOnly: true,
            allowMove: false,
            allowCopy: false,
            allowDelete: false,
            allowInsert: false,
            allowLink: true,
        });

        this.diagram.nodeTemplate = $(
            go.Node,
            'Auto',
            $(go.Shape, 'RoundedRectangle', { fill: '#001529', strokeWidth: 0 }),
            $(go.Panel, 'Table', { margin: 5 },
                $(go.Picture, { row: 0, column: 0, width: 50, height: 50, margin: 10 }, new go.Binding('source', 'image')),
                $(go.TextBlock, { row: 1, column: 0, font: 'bold 14px Arial', margin: 5, stroke: "white" }, new go.Binding('text', 'name')),
                $(go.TextBlock, { row: 2, column: 0, font: '12px Arial', margin: 5, stroke: "white" }, new go.Binding('text', 'title')),
                $(go.Panel, 'Horizontal',
                    { row: 3, column: 0, alignment: go.Spot.Center },
                    $(
                        go.TextBlock,
                        'PDF Görüntüle',
                        { margin: 5, font: 'bold 12px Arial', stroke: 'white', cursor: 'pointer' },
                        {
                            click: (e, obj) => this.openPdfModal(obj.part?.data)
                        }
                    )
                )
            )
        );

        this.diagram.model = new go.TreeModel(this.nodeDataArray);
    }

    openPdfModal (data: any) {
        this.selectedPdf = data.pdf;
        this.selectedPdf = this.sanitizer.bypassSecurityTrustResourceUrl(data.pdf);

        this.isModalVisible = true;

    }
    handleCancel () {
        this.isModalVisible = false;
    }

    onFileSelected (event: any) {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.selectedPdf = e.target.result;
                if (this.diagram && this.diagram.selection.first()) {
                    const selectedNode = this.diagram?.selection.first();
                    if (selectedNode) {
                        this.uploadedFiles[selectedNode.data.key] = e.target.result;
                    }
                }
                this.message.success('PDF başarıyla yüklendi.');
            };
            reader.readAsDataURL(file);
        } else {
            this.message.error('Lütfen bir PDF dosyası seçin.');
        }
    }
    uploadNewPdf (event: any): void {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            this.uploadedPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
            console.log(file.name)
            this.messageService.success(`${file.name} başarıyla yüklendi.`);

        }

    }

}
