import { trigger, transition, style, group, animateChild, query, animate } from "@angular/animations";

// :enter is the new page
// :old is the previous page

export const appRouteAnimations =
  trigger('routeAnimations', [
    transition('playPage <=> boardgamePage', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
      ]),
      query(':leave', [
        animateChild(),
      ]),
      group([
        query(':leave', [
          animate('1s ease-out', style({ transform: 'translateX(-100%)', opacity: 0}))
        ]),
        query(':enter', [
          animate('0.5s 0.1s ease-out', style({ opacity: 1, transform: 'none' })),
        ]),
        query(':enter', [
          animateChild()
        ], { delay: '500ms' })
      ]),
    ]),
  ]);
