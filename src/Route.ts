
export class Route{

    route: string;
    uri: string;
    placeholders: any[];

    constructor( route: string = "", uri: string = "", placeholders: any[] = [] ){
        this.route = route;
        this.uri = uri;
        this.placeholders = placeholders;
    }
}
