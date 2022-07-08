
export class RouteTranslator{
    public extractInfo( route: string, uri: string ) : Route;
    public buildUri(route: string, variables: any[]): string;
    public setPlaceholderRexexp( regexp: RegExp ): void;
    public getPlaceholderRegExp(): RegExp;
    public setCleanKey( cleanKey: Function ): void;
    public getCleanKey(): Function;
}

export class Route{

    route: string;
    uri: string;
    placeholders: any[];

    constructor( route: string, uri: string, placeholders: any[] );
}