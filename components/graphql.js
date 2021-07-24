import  client  from '../pages/apollo-client';
import { gql } from '@apollo/client';


export default async function  getMediaData(page,search){
const { data } = await client.query({
    query: gql`
    query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { 
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(search: $search)  {
          id
          episodes
          description
          genres
          title {
            english
          }
          coverImage {
            large
          }
        }
}
  }`,
  variables: {
    page: page,
    perPage: 18,
    search: search
  }
});
return  {
    media: data.Page.media,
    currentPage: data.Page.pageInfo.currentPage,
    hasNextPage:data.Page.pageInfo.hasNextPage,
    
  }
}

