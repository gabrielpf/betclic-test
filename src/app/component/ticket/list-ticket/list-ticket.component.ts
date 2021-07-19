import {Component, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user.interface";
import {Ticket} from "../../../../interfaces/ticket.interface";
import {BackendService} from "../../../backend.service";

@Component({
    selector: 'app-list-ticket',
    templateUrl: './list-ticket.component.html',
    styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
    public users: User[];
    public tickets: Ticket[];

    constructor(private readonly backendService: BackendService) {
        console.log('ok');
    }

    ngOnInit(): void {
        this.backendService.users().subscribe(users => {
            this.users = users;
        })

        this.backendService.tickets().subscribe(tickets => {
            this.tickets = tickets;
        })
    }

}
