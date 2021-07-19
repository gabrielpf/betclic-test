import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailTicketComponent} from "./detail-ticket/detail-ticket.component";
import {ListTicketComponent} from "./list-ticket/list-ticket.component";
import {TicketRoutingModule} from "./app-routing-ticket.module";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [DetailTicketComponent, ListTicketComponent, NewTicketComponent],
    imports: [
        CommonModule,
        TicketRoutingModule,
        ReactiveFormsModule
    ]
})
export class TicketModule {
}
