import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';

describe('ReceptionComponent', () => {
    let component: DashComponent;
    let fixture: ComponentFixture<DashComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ DashComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
