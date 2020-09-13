import {Component} from '@angular/core';
import {CriteriaOperator, QsoService} from '../shared/qso.service';

@Component({
  selector: 'kel-qso-filter',
  templateUrl: './qso-filter.component.html',
  styleUrls: ['./qso-filter.component.scss']
})
export class QsoFilterComponent {
  callsign = '';
  state = '';
  stateOp: string = CriteriaOperator.equal;
  country = '';
  countryOp: string = CriteriaOperator.equal;
  mode = '';
  modeOp: string = CriteriaOperator.equal;

  constructor(private qsoService: QsoService) {
  }

  changed(): void {
    this.callsign = this.callsign.toUpperCase();
    this.qsoService.setFilter({
      call: this.callsign,
      state: this.state,
      stateOperator: CriteriaOperator[this.stateOp],
      country: this.country,
      countryOperator: CriteriaOperator[this.countryOp],
      mode: this.mode,
      modeOperator: CriteriaOperator[this.modeOp],
    });
  }

  clearAll(): void {
    this.callsign = '';
    this.state = '';
    this.stateOp = CriteriaOperator.equal;
    this.country = '';
    this.countryOp = CriteriaOperator.equal;
    this.mode = '';
    this.modeOp = CriteriaOperator.equal;
    this.changed();
  }
}
