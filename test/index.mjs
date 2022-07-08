import {RouteTranslator} from '../index.js';

const tr = new RouteTranslator();

const route = tr.extractInfo("test/{id}/some", "test/123/some");
console.log(route);

const route2 = tr.extractInfo("test/{id}/some/{example}/more", "test/123/some/complete/more");
console.log(route2);

const uri = tr.buildUri("test/{id}/some/{example}", [{ key: "id", value: "123" }, { key: "example", value: "complete" }]);
console.log(uri);