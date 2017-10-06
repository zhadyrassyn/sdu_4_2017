import {Component, OnInit} from "@angular/core";
@Component({
    selector:'main-tab-1',
    template:`
        <div class="container">
            <div class="row">
                <div class="col-lg-11">
                    <client-table (selectedRow)="clientInfo = $event"></client-table>
                </div>
                <div class="col-lg-1">
                    <client-toolbar [clientInfo]="clientInfo"></client-toolbar>
                </div>
            </div>
        </div>
    `
})
export class MainTab1Component implements OnInit{
    ngOnInit(): void {
        console.log('MainTab1');
    }


}
