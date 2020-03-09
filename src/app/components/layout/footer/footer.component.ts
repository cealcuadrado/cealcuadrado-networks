import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { socials } from '../../../constants/socials';
import { Social } from 'src/app/interfaces/social';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() author: string;
  @Input() email: string;
  year: number;
  socials: Social[];

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.year = this.dateService.getCurrentYear();
    this.socials = socials;
  }

}
