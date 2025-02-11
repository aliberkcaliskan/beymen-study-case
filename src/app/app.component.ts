import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterLink, NzButtonModule, NzInputModule, RouterOutlet, NzAvatarModule, NzIconModule, NzLayoutModule, NzMenuModule, NzDropDownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCollapsed = true;
  pageTitle: string = 'Sipariş Kontrol Ekranı';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  updateTitle (): void {
    const route = this.activatedRoute.firstChild;
    if (!route) return;

    route.data.subscribe(data => {
      this.pageTitle = data['title'] || 'Sipariş Kontrol Ekranı';
    });
  }
  toggleMenu () {
    this.isCollapsed = !this.isCollapsed;
  }

  logout () {
    console.log("Kullanıcı çıkış yaptı.");
  }
}