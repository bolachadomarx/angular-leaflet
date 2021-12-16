import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faFire, faBurn, faPeopleArrows, faSubway } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faCoffee = faFire;
  faBurn = faBurn;
  faPeopleArrows = faPeopleArrows
  faSubway = faSubway
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  loading: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {}

  goToMongo() {
    this.router.navigate(['mongo']);
  }

  goToLocal() {
    this.router.navigate(['local']);
  }
  goToVizinhanca() {
    this.router.navigate(['vizinhanca'])
  }

  goToMetro() {
    this.router.navigate(['metro'])
  }
}
