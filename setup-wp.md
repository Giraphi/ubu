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

<h2>Custom Post Type UI</h2>

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
