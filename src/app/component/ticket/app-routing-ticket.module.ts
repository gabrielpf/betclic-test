import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListTicketComponent} from "./list-ticket/list-ticket.component";
import {DetailTicketComponent} from "./detail-ticket/detail-ticket.component";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";

const routes: Routes = [
    {
        path: '',
        component: ListTicketComponent,
    },
    {
        path: 'detail/:id',
        component: DetailTicketComponent,
    },
    {
        path: 'new',
        component: NewTicketComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketRoutingModule {
}
