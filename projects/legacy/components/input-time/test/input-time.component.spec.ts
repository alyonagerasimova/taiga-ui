import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiTime} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiHint, TuiRootComponent} from '@taiga-ui/core';
import {
    TuiInputTimeComponent,
    TuiInputTimeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {tuiCreateKeyboardEvent, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

const TIMES = [
    new TuiTime(0, 0),
    new TuiTime(0, 30),
    new TuiTime(1, 0),
    new TuiTime(1, 30),
    new TuiTime(2, 0),
    new TuiTime(2, 30),
    new TuiTime(3, 0),
];

describe('InputTime', () => {
    @Component({
        standalone: true,
        imports: [
            TuiRootComponent,
            TuiInputTimeModule,
            ReactiveFormsModule,
            TuiHint,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-root>
                <tui-input-time
                    [formControl]="control"
                    [items]="items"
                    [readOnly]="readOnly"
                    [strict]="strict"
                    [tuiHintContent]="hintContent"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                ></tui-input-time>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputTimeComponent, {static: true})
        public component!: TuiInputTimeComponent;

        public control = new FormControl(new TuiTime(12, 30));
        public cleaner = false;
        public readOnly = false;
        public items: TuiTime[] = [];
        public labelOutside = false;
        public size: TuiSizeL | TuiSizeS = 'l';
        public strict = false;
        public hintContent: string | null = 'prompt';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputTimeComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;
    let input: HTMLInputElement;

    function getDropdown(): DebugElement | null {
        return pageObject.getByAutomationId('tui-input-time__dropdown');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
        input = fixture.debugElement.query(By.css('input')).nativeElement;
        await fixture.whenStable();
        fixture.detectChanges();
    });

    describe('Initial value', () => {
        it('The value in the field is formatted by mask', async () => {
            await fixture.whenStable();
            expect(input.value).toBe('12:30');
        });

        it('The initial value in the formControl is issued as an object with the hours and minutes properties', () => {
            expect(testComponent.control.value?.hours).toBe(12);
            expect(testComponent.control.value?.minutes).toBe(30);
        });
    });

    describe('The value in the formControl changes outside', () => {
        beforeEach(() => {
            testComponent.control.setValue(new TuiTime(22, 30));
            fixture.detectChanges();
        });

        it('A new formatted value appears in the field', async () => {
            await fixture.whenStable();
            fixture.detectChanges();
            await fixture.whenStable();
            expect(input.value).toBe('22:30');
        });

        it('In the formControl is issued as an object with hours and minutes properties', () => {
            expect(testComponent.control.value?.hours).toBe(22);
            expect(testComponent.control.value?.minutes).toBe(30);
        });
    });

    describe('Short time input (less than 5 characters, including colon)', () => {
        it('The value of formControl is passed null', () => {
            component.onValueChange('11:1');
            fixture.detectChanges();
            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('Keyboard control', () => {
        beforeEach(async () => fixture.whenStable());

        it('If the cursor is at position 0, then pressing UP increases the hour by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(0, 0);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowUp', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('13:30');
        });

        it('If the cursor is at position 4, then pressing UP increases the minute by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(4, 4);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowUp', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:31');
        });

        it('If the cursor is at position 0, then pressing DOWN decreases the hour by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(0, 0);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('11:30');
        });

        it('If the cursor is at position 4, then pressing DOWN decreases the minute by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(4, 4);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:29');
        });

        it('When readOnly is ignored', async () => {
            testComponent.readOnly = true;
            input.focus();
            fixture.detectChanges();
            component.nativeFocusableElement?.setSelectionRange(0, 0);
            await fixture.whenStable();

            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowUp', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:30');

            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:30');
        });
    });

    describe('Drop-down list', () => {
        beforeEach(() => {
            testComponent.items = TIMES;

            fixture.detectChanges();
            input.focus();
        });

        describe('Dropdown appears', () => {
            it('down arrow', () => {
                input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
                fixture.detectChanges();

                expect(getDropdown()).not.toBeNull();
            });

            it('when typing', () => {
                inputPO.sendText('1');

                expect(getDropdown()).not.toBeNull();
            });
        });

        describe('Dropdown does not appear', () => {
            it('Dropdown does not appear on focus', () => {
                expect(getDropdown()).toBeNull();
            });

            it('down arrow when readonly is on', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
                fixture.detectChanges();

                expect(getDropdown()).toBeNull();
            });
        });

        it('Input filters items', () => {
            inputPO.sendText('03');

            expect(pageObject.getAllByAutomationId('tui-input-time__item').length).toBe(
                1,
            );
        });

        it('The value is substituted when selecting an item from the dropdown', () => {
            inputPO.sendText('03');
            pageObject.getByAutomationId('tui-input-time__item')!.nativeElement.click();

            expect(testComponent.control.value?.toString().trim()).toBe(
                TIMES[6].toString(),
            );
        });

        describe('strict mode', () => {
            it('by default it is false, and the entered value is freely exposed in the control', () => {
                inputPO.sendText('11:11');

                expect(testComponent.control.value?.toString().trim()).toBe('11:11');
            });

            it('with strict = true, the entered value is not set if it is absent in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('11:11');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).not.toBe('11:11');
            });

            it('with strict = true, the entered value is added if present in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('01:30');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).toBe('01:30');
            });

            it('with strict = true, the entered value is rounded to the nearest in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('01:20');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).toBe('01:30');
            });
        });
    });
});
