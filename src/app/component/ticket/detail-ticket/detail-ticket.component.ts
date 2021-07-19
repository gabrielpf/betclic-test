import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {BackendService} from "../../../backend.service";
import {Ticket} from "../../../../interfaces/ticket.interface";
import {User} from "../../../../interfaces/user.interface";

@Component({
    selector: 'app-detail-ticket',
    templateUrl: './detail-ticket.component.html',
    styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {

    private routeSub: Subscription;
    private idTicket: number;
    public ticketDetail: Ticket;
    public listUsers: User[];
    public edit: boolean = false;

    constructor(private route: ActivatedRoute, private backendService: BackendService) {
    }

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe(params => {
            this.idTicket = params['id'];
            this.init();
        });
    }

    init() {
        this.backendService.ticket(this.idTicket).subscribe(ticketDetail => {
            this.ticketDetail = ticketDetail;
        })

        this.backendService.users().subscribe(users => {
            this.listUsers = users;
        })
    }

    getNameUser(id) {
        return this.listUsers.find(user => user.id == id)?.name
    }

    setCompleted(value){
        this.ticketDetail.completed = value;
    }

    setAssigne(idAssign) {
        this.ticketDetail.assigneeId = idAssign;
    }

    updateticket() {
        this.backendService.assign(this.ticketDetail.id, this.ticketDetail.assigneeId);
        this.backendService.complete(this.ticketDetail.id, this.ticketDetail.completed);
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

}
