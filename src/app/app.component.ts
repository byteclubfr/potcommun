import { Component, OnInit } from "@angular/core";
import { SessionService } from "./session.service";
import { Friend } from "./friend/friend";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { combineLatest } from "rxjs/operators/combineLatest";
import { map } from "rxjs/operators/map";
import { scan } from "rxjs/operators/scan";

@Component({
  selector: "bc-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public obs$ = new Subject();
  public active$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.active$ = this.breakpointObserver
      .observe("(min-width: 1024px)")
      .pipe(
        map(({ matches }) => matches),
        combineLatest(this.obs$.pipe(scan(acc => !acc, false))),
        map(([mobile, open]) => !mobile && open)
      );
  }
}
