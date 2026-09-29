// Converts the site's source images in images-src/ into WebP files under public/images.
// images-src/ holds the client's images. The drawings there already carry the
// Rajputra Aerospace name and the current dimensions, so edit those files, not
// the originals in ../Documentation.
// Run with: npm run images
import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.join(root, 'images-src')
const out = path.join(root, 'public', 'images')

await mkdir(out, { recursive: true })

for (const file of (await readdir(source)).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const name = file.replace(/\.\w+$/, '')
  const info = await sharp(path.join(source, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(out, `${name}.webp`))
  console.log(`${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}
