import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule',
    },
    {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule'
    },
    {
        path: 'contact-info/:name',
        loadChildren: './contact-info/contact-info.module#ContactInfoModule'
    },
    {
        path: 'text/:code',
        loadChildren: './text-screen/text-screen.module#TextScreenModule'
    },
    {
        path: '**',
        redirectTo: 'contacts'
    }
];