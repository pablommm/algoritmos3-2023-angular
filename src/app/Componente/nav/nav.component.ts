
import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isAsideVisible = false

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}


  toggleAside() {
    this.isAsideVisible = !this.isAsideVisible
  }

  activeRoute(ruta: string) {
    return ruta === this.route.snapshot.url.join('/')
  }
}
