import { getPostNames, getPostByName } from '../../api/getPosts'
import { marked } from 'marked'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import PostStyle from '../../styles/Post.module.css'
import hljs from 'highlight.js'
export async function getStaticPaths() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartypants: false,
    xhtml: false
  });
  const postNames = getPostNames()
  const paths = postNames.map((post) => ({
    params: { id: post.name },
  }))

  return { paths, fallback: false }
}
export async function getStaticProps({ params }: any) {
  console.log(params);
  const rawPost = getPostByName(params.id)  
  const post = marked.parse(rawPost.content)
  return { props: { mdName: params.id, mdContent: post, mdRaw: rawPost.content } }
}
export default function PostsById({ mdContent,mdRaw }: any) {
  return (
    <div className='w-full mx-auto my-12 flex justify-center'>
      <div>
        <article className={`${PostStyle.article} prose prose-indigo mx-auto`} dangerouslySetInnerHTML={{ __html: mdContent }}>
        </article>
      </div>
      <div className='!w-60 ml-8'>
        <MarkNav
          className={`${PostStyle["article-nav"]} article-menu sticky top-[88px]`}
          source={mdRaw}
          declarative={true}
          headingTopOffset={80}
        />
      </div>

    </div>
  )
}