import { postsInfo } from "../../api/getPosts"
import PostCard from "../../components/PostCard"
export async function getStaticProps() {
  postsInfo
  return { props: { postsInfo } }
}
export default function Posts() {
  return (
    <div>
      {
        postsInfo.map((info)=>{
          return (
            <PostCard key={info.data.title??info.filename}/>
          )
        })
      }
      
    </div>
  )
}