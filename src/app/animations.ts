import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export const listDropAnimation = trigger('listStagger', [
    transition('* <=> *', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(-15px)' }),
                stagger(
                    '50ms',
                    animate(
                        '550ms ease-out',
                        style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                )
            ],
            { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
            optional: true
        })
    ])
]);

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(2000, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate(500, style({ opacity: 0 }))
        ])
    ]);

export const routerSlideIn = trigger('routerTransition', [
    state('void', style({ position: 'absolute', width: '100%', height: '100%' })),
    state('*', style({ position: 'absolute', width: '100%', height: '100%' })),
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
]);
