import { trigger, transition, style, group, animateChild, query, animate } from "@angular/animations";

// :enter is the new page
// :old is the previous page

export const boardgameRouteAnimations =
  trigger('boardgameRouteAnimations', [
    transition('boardgameListPage <=> boardgameViewPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      // animateChild for children routing animation
      query(':leave', animateChild(), { optional: true }),
      // animation in parralel
      group([
        query(':leave', [
          animate('500ms ease-in', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
