import fs from 'fs'
import path from 'path';
const postsDir = path.resolve(process.cwd(), './pages/posts')
const postsName = fs.readdirSync(postsDir).filter((fileName) => fileName.endsWith('.md'))
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
    return {
      name,
      buffer: fs.readFileSync(path.resolve(postsDir, './', name))
    }
  })?.[0]
  return postsFile
}
