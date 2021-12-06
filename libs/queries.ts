import fetcher from "./fetcher";

// grab the first 20 posts.

export const ALL_POSTS = `query allPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        date
        slug
        title
        excerpt
        featuredImage {
          node {
            id
            sourceUrl(size: LARGE)
          }
        }
      }
    }
  }
  
  `;

// get all the slugs for static paths / static generation
export const ALL_PATHS = `query ALL_PATHS {
  posts (first:10000){
    nodes {
      slug
    }
  }
}
`

// post by a slug, so we can display to the user.

export const POST_BY_SLUG = `query POST_BY_SLUG($id: ID = "") {
  post(idType: SLUG, id: $id) {
    slug
    featuredImage {
      node {
        sourceUrl
      }
    }
    date
    content
    excerpt
    modified
    title
  }
}
`
