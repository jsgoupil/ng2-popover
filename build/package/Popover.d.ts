import { ViewContainerRef, ComponentFactoryResolver, OnChanges, SimpleChange } from "@angular/core";
import { PopoverContent } from "./PopoverContent";
export declare class Popover implements OnChanges {
    private viewContainerRef;
    private resolver;
    private popover;
    private visible;
    constructor(viewContainerRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    content: string | PopoverContent;
    popoverDisabled: boolean;
    popoverAnimation: boolean;
    popoverPlacement: "top" | "bottom" | "left" | "right";
    popoverTitle: string;
    popoverOnHover: boolean;
    popoverCloseOnClickOutside: boolean;
    popoverCloseOnMouseOutside: boolean;
    popoverDismissTimeout: number;
    showOrHideOnClick(): void;
    showOnHover(): void;
    hideOnHover(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    toggle(): void;
    show(): void;
    hide(): void;
    getElement(): any;
}
