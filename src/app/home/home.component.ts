import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.transicao(),
    window.scroll(0,0)
  }
  transicao() {
    var parent = document.querySelector('.splitview')! as HTMLElement,
      topPanel = parent.querySelector('.top')! as HTMLElement,
      handle = parent.querySelector('.handle')! as HTMLElement,
      skewHack = 0,
      delta = 0;
    parent.addEventListener('mousemove', function (event) {
      delta = (event.clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = event.clientX + delta + 'px';
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
    })
    if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
    }
  }


}
