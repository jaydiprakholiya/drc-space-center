import { Component } from '@angular/core';
@Component({
    selector: 'app-footer',
    template: ` 
    <div>
    <p>
    copyright &#169; by me
    </p>
    </div>`,
    styles: [`
    div{
            margin: 0px;
            width: 100%;
            bottom: 0;
            position: absolute;
            text-align: end;
            background-color: black;
            right:0;
            height:25px;
        }
        p{
            color:red;
            text-align: end;
            margin: 0;
            padding: 0;

         }
    `]
})
export class footercomponent {

}
