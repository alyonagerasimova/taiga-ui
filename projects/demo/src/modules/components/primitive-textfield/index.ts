import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiContext, TuiInputMode, TuiInputType} from '@taiga-ui/cdk';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_HINT_DIRECTIONS,
    TuiHintOptionsDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {HintControllerDocumentationComponent} from '../abstract/hint-controller-documentation';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';
import {TextfieldControllerDocumentationComponent} from '../abstract/textfield-controller-documentation';
import ExampleComponent1 from './examples/1';
import ExampleComponent2 from './examples/2';

const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = 'Bell';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        RouterLink,
        TuiLinkDirective,
        FormsModule,
        ExampleComponent1,
        ExampleComponent2,
        TuiPrimitiveTextfieldModule,
        TuiHintOptionsDirective,
        TuiTextfieldOptionsDirective,
        TuiTextfieldControllerModule,
        TuiAvatarComponent,
        TuiSvgComponent,
        HintControllerDocumentationComponent,
        TextfieldControllerDocumentationComponent,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiInteractive {
    @ViewChild('interactiveContent')
    private readonly interactiveIcon: PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeS>
    >;

    protected readonly routes = DemoRoute;
    protected readonly themes = ['Taiga UI', 'Bootstrap', 'Material'];
    protected theme = this.themes[0];

    protected readonly iconVariants = ['', 'tuiIconSearchLarge', 'Interactive content'];
    protected selectedIcon = this.iconVariants[0];

    protected readonly iconLeftVariants = [
        '',
        'tuiIconPieChartLarge',
        'tuiIconCreditCardLarge',
    ];

    protected iconLeft = '';

    protected readonly typeVariants: readonly TuiInputType[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    protected cleaner = false;

    protected editable = true;

    protected filler = '';

    protected prefix = '';

    protected postfix = '';

    protected readonly maxLengthVariants: readonly number[] = [10];

    protected maxLength = null;

    protected readonly inputModeVariants: readonly TuiInputMode[] = ['text', 'numeric'];

    protected inputMode = this.inputModeVariants[0];

    protected readonly customContentVariants = [
        '',
        CUSTOM_SVG_NAME,
        '<span>LongTextContent</span>',
    ];

    protected customContentSelected = this.customContentVariants[0];

    protected password = '';

    protected example2Value = 'mail@example.com';

    protected value = '';

    protected exampleText = '';

    protected disabled = false;

    protected readOnly = false;

    protected labelOutside = false;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size = this.sizeVariants[2];

    protected readonly hintContentVariants: readonly string[] = ['', 'Ivan Ivanov'];

    protected readonly hintDirectionVariants = TUI_HINT_DIRECTIONS;

    protected readonly hintAppearanceVariants = ['', 'error', 'dark'];

    protected invalid = false;

    protected hintContent = this.hintContentVariants[0];

    protected hintDirection = this.hintDirectionVariants[0];

    protected hintAppearance = this.hintAppearanceVariants[0];

    protected get customContent(): string | null {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
    }

    protected get iconContent(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        if (this.selectedIcon === '') {
            return '';
        }

        return this.interactiveIcon && this.selectedIcon !== 'tuiIconSearchLarge'
            ? this.interactiveIcon
            : 'tuiIconSearchLarge';
    }

    protected get isBootstrap(): boolean {
        return this.theme === this.themes[1];
    }

    protected get isMaterial(): boolean {
        return this.theme === this.themes[2];
    }

    protected get placeholder(): string {
        return this.isBootstrap ? 'Type a value' : 'Theming sample';
    }

    protected get customizationSize(): TuiSizeL | TuiSizeS {
        return this.isBootstrap ? 's' : 'l';
    }

    protected onClick(): void {
        console.info('Interactive icon clicked');
    }
}
