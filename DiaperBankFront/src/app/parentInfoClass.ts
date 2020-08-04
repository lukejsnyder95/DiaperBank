import { ChildInfoClass } from './childInfoClass'
export class ParentInfoClass {
    FirstName: string = '';
    LastName: string = '';
    DOB: string = '';
    Address: string = '';
    City: string = '';
    State: string = '';
    ZipCode: string = '';
    County: string = '';
    PhoneNumber: string = '';
    id: string = '';
    children: ChildInfoClass[] = [];
}