import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidatorDirective} from '@taiga-ui/cdk';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputModule, TuiInputPhoneModule, TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
        TuiSelectModule,
        FormsModule,
        TuiDataListWrapper,
        NgIf,
        TuiValidatorDirective,
        TuiInputPhoneModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = ['Email', 'Phone'];

    protected type = this.items[0];

    protected readonly group = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormControl('', Validators.required),
    });

    protected readonly validator = Validators.email;
}
