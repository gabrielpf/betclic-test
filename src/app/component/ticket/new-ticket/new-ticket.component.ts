import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../backend.service";
import {User} from "../../../../interfaces/user.interface";

@Component({
    selector: 'app-new-ticket',
    templateUrl: './new-ticket.component.html',
    styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

    public formTicket: FormGroup;
    public listUsers: User[];

    constructor(private backendService: BackendService) {
    }

    ngOnInit(): void {
        this.formTicket = new FormGroup({
            description: new FormControl(null, Validators.required),
        });
    }

    public createticket() {
        if (this.formTicket.valid) {
            this.backendService.newTicket({description: this.formTicket.get('description').value}).subscribe(data => {

            })
        }
    }
}
