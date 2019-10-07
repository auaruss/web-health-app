import { Component, OnInit } from '@angular/core';
import { Config } from '../../models/config';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  config: Config;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.config = this.configService.getConfig();
  }
  

}
