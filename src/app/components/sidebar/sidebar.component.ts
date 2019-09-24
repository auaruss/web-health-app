import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  config: Object;

  constructor() { }

  ngOnInit() {
    this.config = {
      "sites": [
        "acp.iu.edu",
        "bar.indiana.edu",
        "iubest.indiana.edu",
        "employers.cdc.indiana.edu",
        "gradschool.cdc.indiana.edu",
        "cdc.indiana.edu",
        "studentemployment.cdc.indiana.edu",
        "class.indiana.edu",
        "sit.indiana.edu",
        "engagedlearning.indiana.edu",
        "gened.indiana.edu",
        "hpplc.indiana.edu",
        "hutton.indiana.edu",
        "hiep.indiana.edu",
        "ifs.indiana.edu",
        "ovpueit.indiana.edu",
        "iu2u.indiana.edu",
        "accreditation.indiana.edu",
        "iuhighschool.iu.edu",
        "open.indiana.edu",
        "nsa.indiana.edu",
        "ovpue.indiana.edu",
        "surveys.indiana.edu",
        "tsap.indiana.edu",
        "sab.ovpue.indiana.edu",
        "nondegree.indiana.edu",
        "sac.indiana.edu",
        "shc.indiana.edu",
        "wellsscholars.indiana.edu",
        "ud.indiana.edu",
        "wellsscholars.indiana.edu",
        "womeninstem.indiana.edu",
        "wts.indiana.edu",
        "citl.indiana.edu",
        "iujur.iu.edu"
      ]
    };
  }
  

}
