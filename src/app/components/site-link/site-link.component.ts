import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-link',
  templateUrl: './site-link.component.html',
  styleUrls: ['./site-link.component.scss']
})
export class SiteLinkComponent implements OnInit {
  @Input() site: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(site) {
    this.router.navigate(['/site', site]);
  }
}
