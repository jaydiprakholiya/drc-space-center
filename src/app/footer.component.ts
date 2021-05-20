import {Component} from '@angular/core';
@Component({
    selector:'app-footer',
    template:` 
    <div>
    <p>
    copyright &#169; by me
    </p>
    </div>`,
    styles:[`
    div{
            margin: 0px;
            width: 100%;
            bottom: 0;
            position: absolute;
            text-align: end;
            background-color: black;
        }
        p{
            color:red;
            text-align: center;
         }
    `]
})
export class footercomponent{

}
