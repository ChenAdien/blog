import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'
const postsDir = path.resolve(process.cwd(), './pages/posts')
const postsName = fs.readdirSync(postsDir).filter((fileName) => fileName.endsWith('.md'))
function getPostsInfo(_path:string){
  const info = matter.read(_path)
  return {...info,filename:path.basename(_path),content:''}
}
export const postsInfo =postsName.map((name=>{
  return getPostsInfo(path.resolve(postsDir,'./',name))
}))
export function getPostNames() {
  const postsFile = postsName.map(name => {
    return {
      name
    }
  })
  return postsFile
}
export function getPostByName(name: string) {  
  const postsFile = postsName.filter(_name => _name === name).map(name => {    
    const matterResult = matter.read(path.resolve(postsDir, './', name))
    const content = matterResult.content    
    return {
      name,
      data:matterResult.data,
      content
    }
  })?.[0]
  return postsFile
}
