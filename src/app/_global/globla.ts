import { Injectable } from "@angular/core";
import { UserData } from '../_interface/interfacesRequest';


@Injectable()
export class Globals {
   data = <UserData>{
        weight: 0,
        height: 0,
        age: 0,
        ch: 0,
        sex: 'H',
        meals: 0,
        fat: 0,
        fm: 0,
        fe: 0,
        Diet: 'D',
    };
}