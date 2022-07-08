# RouterTranslator #

## Usage ##

    import {RouterTranslator} from "@makechtec/router-translator";

    const translator = new RouterTranslator();

    const route = translator.extractInfo("/products/{id}/description", "/products/23/description");
    console.log(route.variables);

result:

    [
        {
            key: "id",
            value: "23"
        }
    ]

other example:

    const route = translator.extractInfo("/category/{category_id}/tag/{tag_id}", "/category/23/tag/45");
    console.log(route.variables);

result:

    [
        {
            key: "category_id",
            value: "23"
        },
        {
            key: "tag_id",
            value: "45"
        }
    ]