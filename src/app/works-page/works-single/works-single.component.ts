import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from 'src/app/works.service';

@Component({
  selector: 'app-works-single',
  templateUrl: './works-single.component.html',
  styleUrls: ['./works-single.component.scss']
})
export class WorksSingleComponent implements OnInit {
  work;
  id: any;
  lang;

  constructor(
    private worksService: WorksService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';

    this.route.params.subscribe(params => {
       this.id = params['id'];
    })

      this.worksService
        .getSingleWork(this.id)
        .subscribe(work => {
          this.work = work;
      })
    
  }

}
