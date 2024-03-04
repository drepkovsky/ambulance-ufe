/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DrAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface DrAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface DrAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface DrAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDrAmbulanceWlEditorElement;
}
export interface DrAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDrAmbulanceWlListElement;
}
declare global {
    interface HTMLDrAmbulanceWlAppElement extends Components.DrAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLDrAmbulanceWlAppElement: {
        prototype: HTMLDrAmbulanceWlAppElement;
        new (): HTMLDrAmbulanceWlAppElement;
    };
    interface HTMLDrAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLDrAmbulanceWlEditorElement extends Components.DrAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDrAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLDrAmbulanceWlEditorElement, ev: DrAmbulanceWlEditorCustomEvent<HTMLDrAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDrAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLDrAmbulanceWlEditorElement, ev: DrAmbulanceWlEditorCustomEvent<HTMLDrAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDrAmbulanceWlEditorElement: {
        prototype: HTMLDrAmbulanceWlEditorElement;
        new (): HTMLDrAmbulanceWlEditorElement;
    };
    interface HTMLDrAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLDrAmbulanceWlListElement extends Components.DrAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDrAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLDrAmbulanceWlListElement, ev: DrAmbulanceWlListCustomEvent<HTMLDrAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDrAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLDrAmbulanceWlListElement, ev: DrAmbulanceWlListCustomEvent<HTMLDrAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDrAmbulanceWlListElement: {
        prototype: HTMLDrAmbulanceWlListElement;
        new (): HTMLDrAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "dr-ambulance-wl-app": HTMLDrAmbulanceWlAppElement;
        "dr-ambulance-wl-editor": HTMLDrAmbulanceWlEditorElement;
        "dr-ambulance-wl-list": HTMLDrAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface DrAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface DrAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: DrAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface DrAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: DrAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "dr-ambulance-wl-app": DrAmbulanceWlApp;
        "dr-ambulance-wl-editor": DrAmbulanceWlEditor;
        "dr-ambulance-wl-list": DrAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dr-ambulance-wl-app": LocalJSX.DrAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLDrAmbulanceWlAppElement>;
            "dr-ambulance-wl-editor": LocalJSX.DrAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLDrAmbulanceWlEditorElement>;
            "dr-ambulance-wl-list": LocalJSX.DrAmbulanceWlList & JSXBase.HTMLAttributes<HTMLDrAmbulanceWlListElement>;
        }
    }
}
