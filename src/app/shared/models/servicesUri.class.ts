import { IDictionary } from './IDictionary.interface';
export class ServicesURI implements IDictionary<string> {
    [data: string]: string;
}