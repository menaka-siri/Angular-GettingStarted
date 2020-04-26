import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    ngOnInit(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        console.log(`The rating ${this.rating} was clicked!`);
    }
}
