import { Injectable } from '@angular/core';
import { ShifumiEvent } from '../model/shifumi-event.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventViewResolverService implements Resolve<ShifumiEvent> {

  constructor(
    private service: EventService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ShifumiEvent> {
    const id = route.paramMap.get('id');
    return this.service.getEvent(id)
        .then((event: ShifumiEvent) => event)
        .catch(() => {
          this.router.navigate(['player']);
          return null;
        });
  }
}
