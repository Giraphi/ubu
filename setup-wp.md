<h1>Edit & query custom data types</h1>

https://developers.wpengine.com/blog/custom-content-types-in-headless-wordpress

https://developers.wpengine.com/blog/set-up-wordpress-as-a-headless-cms

<h2>Install Wp GraphQl</h2>
- Search for plugin `Wp GraphQL`
- In the wp admin bar click on GraphQL
- Try out some queries, e.g: 

```
{
  posts {
    nodes {
      id
    }
  }
}
```
```
{
  page(id: "my-test-page", idType: URI) {
        title
        content(format: RAW)
        slug
      }
}
```

Then test in the browser with something like this:

```
fetch('https://ubuimperator.000webhostapp.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{ posts { nodes { id } }}"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
  ```

- Some free wp providers don't support this at all.
- So far this only works if the browser is on https://ubuimperator.000webhostapp.com/ when sending the request.
- That also seems to be the reason why queries from localhost (`yarn run dev`) won't work. However they work if we do them server side with `getStaticProps`.
- I guess in the faust.js tutorial they are using a wordpress system that also runs on localhost and therefore don't run into this problem.

<h2>Custom Post Type UI</h2>

<b>NOTE: In the faust.js tutorial they suggest another plugin to create custom data types. This might actually be easier:</b>

https://github.com/wpengine/atlas-content-modeler


- Search for plugin `Custom Post Type UI`
- In the wp admin bar click on 'CPT UI'
- Add Post Type e.g. "Gig". Declaration of fields etc. see next step 
- Under Settings find entry "Supports" check an uncheck everything but "title". (This will tell the wp editor to show no additional UI when we post a Gig. However we want that "title" field because that will also be used by wp for the list entries)
- Under section WpGraphQL set "Show in GraphQL" to true

<h2>Custom Fields</h2>
- Search for plugin `Advanced Custom Fields`
- To make this work together with graphql we also need this plugin: https://www.wpgraphql.com/acf/
- Looks like we can't find it with wp search. So download it and upload it using the "upload plugin" button in our wp admin


- In the wp admin bar click on 'Custom Fields'
- Add a 'Field Group' called 'Gig'
- To this field group add fields, e.g. title, description, image
- Under Location "set show this field group if:
```PostType is-equal-to Gig```"
- Under GraphQl (only there if we installed that other lugin)

<h2>Add a Gig</h2>
- We should have an entry "Gigs" in the wp admin bar
- Check the UI, if all the fields make sense.
- Add 1-2 entries.

<h2>Query it</h2>
In the graphiQl interface try something like this:
```
{
  gigs {                          
    nodes {
      gig {
        description
        headline,
        image {
          uri
          sourceUrl
        },
      }
    }
  }
}
```

<h1>Connect WP and next.js</h1>

https://faustjs.org/
https://github.com/wpengine/faustjs#wordpress-plugin

<h2>Setup faust.js</h2>
Setup faust.js as described <a href="https://faustjs.org/docs/tutorial/setup-faustjs#introduction">here<a/>.

- Install FaustWP Plugin
- Setup local next.js project

```
yarn add @faustjs/core @faustjs/next
yarn add -D @gqty/cli dotenv-flow
```

<b>Some things to pay attention to</b>

- Enable graphql introspection to generate schemes: WP Admin -> GraphQL -> Enable Public Introspection. See https://faustjs.org/docs/next/guides/fetching-data#troubleshooting
- In the faust.js tutorial and template project, there are imports like this:

```import { client } from 'client';```

even though there's no `client` folder in this directory. It's working because of this line in `tsconfig.json`:
```
"baseUrl": "./src",
```

- Queries seem to work (so far) only from "same domain", i.e. not from localhost! But they work if we do them server-side with a next.js `getStaticProps`.
