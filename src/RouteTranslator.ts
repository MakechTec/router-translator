
export class RouteTranslator{

    private placeholderRegExp: RegExp = /\{([a-z|A-Z|\d]*)\}/g;
    private cleanKey: Function = ( part: string ) => {
        return part.replace( "{", "" ).replace( "}", "" );
    }

    public extractInfo( route: string, uri: string ): Route{
        let m = this.extractVariables(route, uri)
        return new Route(route, uri, m);
    }

    public buildUri(route: string, variables: any[]): string{
        let uri = route;

        variables.forEach((variable) => {
            const keyReg = new RegExp("{"+variable.key+"}", "g");
            uri = uri.replace(keyReg, variable.value);
        });

        return uri;
    }

    private extractVariables( route: string, uri: string): any[]{
        let routeKeys = this.extractKeys(route);
        let routeValues = this.extractValues(route, uri);

        if( routeKeys.length !== routeValues.length ){
            throw new Error( "Placeholder count mismatch" );
        }

        return routeKeys.map((key: string, index: number) => {
            return {key: key, value: routeValues[index]};
        });

    }

    private extractKeys(route: string){
        let routeParts = route.split( "/" );
        
        return routeParts.filter((part: string) => this.placeholderRegExp.test(part))
                        .map((part: string) => this.cleanPart(part));
    }

    private extractValues(route: string, uri: string){
        let routeParts = route.split( "/" );
        let uriParts = uri.split( "/" );
        let placeholderIndexes: number[] = [];

        for(let i : number = 0; i < routeParts.length; i++){

            if(this.placeholderRegExp.test(routeParts[i])){
                placeholderIndexes.push(i);
            }
        }

        return placeholderIndexes.map((ind) => uriParts[ind]);
    }

    private cleanPart( part: string ){
        return this.cleanKey(part);
    }

    public setPlaceholderRexexp( regexp: RegExp ){
        this.placeholderRegExp = regexp;
    }

    public getPlaceholderRegExp(): RegExp{
        return this.placeholderRegExp;
    }

    public setCleanKey( cleanKey: Function ){
        this.cleanKey = cleanKey;
    }

    public getCleanKey(): Function{
        return this.cleanKey;
    }

}
