import { Injectable } from '@angular/core';

@Injectable()
export class Loader {

    private _selector: string = 'spinnerOuterDiv';
    private _element: HTMLElement;

    constructor() {
        this._element = document.getElementById(this._selector);
    }

    public show(): void {
  
        this._element.style['display'] = 'flex';
    }

    public hide(delay: number = 0): void {
        setTimeout(() => {
            if(!this._element){
                this._element = document.getElementById(this._selector);   
            }
          
            this._element.style['display'] = 'none';
        }, delay);
    }
}
