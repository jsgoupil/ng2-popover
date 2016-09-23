import { AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy, EventEmitter } from "@angular/core";
import { Popover } from "./Popover";
export declare class PopoverContent implements AfterViewInit, OnDestroy {
    private element;
    private cdr;
    content: string;
    placement: "top" | "bottom" | "left" | "right";
    title: string;
    animation: boolean;
    closeOnClickOutside: boolean;
    closeOnMouseOutside: boolean;
    popoverDiv: ElementRef;
    popover: Popover;
    onCloseFromOutside: EventEmitter<{}>;
    top: number;
    left: number;
    isIn: boolean;
    displayType: string;
    /**
     * Closes dropdown if user clicks outside of this directive.
     */
    onDocumentMouseDown: (event: any) => void;
    constructor(element: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    hideFromPopover(): void;
    private positionElements(hostEl, targetEl, positionStr, appendToBody?);
    private position(nativeEl);
    private offset(nativeEl);
    private getStyle(nativeEl, cssProp);
    private isStaticPositioned(nativeEl);
    private parentOffsetEl(nativeEl);
}
