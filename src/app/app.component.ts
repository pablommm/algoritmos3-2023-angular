import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WORLDCAPP-2023-GRUPO-4'
  ruta: string = ''

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ruta = event.url
      }
    })
  }

  noEstaEnLogin() {
    console.log(this.ruta)
    return this.ruta !== '/Login'
  }
}
