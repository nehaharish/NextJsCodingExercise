
import AnimeContainer from '../components/AnimeContainer'
import getMediaData from '../components/graphql';

export async function getServerSideProps({ query: { page = 1, search=null } }){
  const data  = await getMediaData(page,search);
  return {
    props: data
 };
    
}

export default function Home({ ...props}) {
  return (
    <AnimeContainer props={props} />
  )
}

