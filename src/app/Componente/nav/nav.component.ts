import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isAsideVisible = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  perfil() {
    this.router.navigateByUrl('/PerfilUsuario');
  }
  inicio() {
    this.router.navigateByUrl('/BusquedaFiguritas');
  }
  figuritas() {
    this.router.navigateByUrl('/BusquedaFiguritas');
  }

  sobres() {
    this.router.navigateByUrl('/BusquedaSobre');
  }
  exit() {
    this.router.navigateByUrl('/Login');
  }

  toggleAside() {
    this.isAsideVisible = !this.isAsideVisible;
  }

  activeRoute(ruta: string) {
    return ruta === this.route.snapshot.url.join('/');
  }
}

