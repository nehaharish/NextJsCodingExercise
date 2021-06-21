import  client  from '../pages/apollo-client';
import { gql } from '@apollo/client';


export default async function  getMediaData(page){
const { data } = await client.query({
    query: gql`
    query ($page: Int, $perPage: Int) {
      Page (page: $page, perPage: $perPage) { 
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media  {
          id
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
    perPage: 20
  }
});
return  {
    media: data.Page.media,
    currentPage: data.Page.pageInfo.currentPage,
    hasNextPage:data.Page.pageInfo.hasNextPage,
    
  }
// return data;
}

