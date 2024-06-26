import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiCalendarYearComponent,
    TuiDropdownModule,
    TuiDropdownOpenDirective,
    TuiPrimitiveTextfieldModule,
    TuiScrollbarComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';

import {TuiInputYearComponent} from './input-year.component';
import {TuiInputYearDirective} from './input-year.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiDropdownModule,
        TuiDropdownOpenDirective,
        TuiPrimitiveTextfieldModule,
        TuiScrollbarComponent,
        TuiCalendarYearComponent,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldLegacyComponent],
})
export class TuiInputYearModule {}
