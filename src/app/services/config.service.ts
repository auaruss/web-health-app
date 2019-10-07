import { Injectable } from '@angular/core';
import { Config } from "../models/config";
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  constructor() { }
  
  /*
  Put your configuration here.
  Not sure what to put here? Reference the documentation in the README or the Config class under models/Config.ts
  */
  getConfig(): Config {
    return {
      siteList: [
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
