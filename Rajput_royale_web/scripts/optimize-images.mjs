// Converts the Rajput source images in ../Documentation into web-sized WebP
// files under public/images, and copies the PDFs into public/docs.
// Run with: npm run images
import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const source = path.resolve(root, '..', 'Documentation')
const imagesOut = path.join(root, 'public', 'images')
const docsOut = path.join(root, 'public', 'docs')

// source file -> [output name, max width]
const images = {
  'scene_02_swiss_alps.jpg': ['hero-alps', 2400],
  'left_side_view_with_wheels.jpg': ['view-left', 1800],
  'right_side_view_with_wheels.png': ['view-right', 1800],
  'front_side_view_with_wheels.jpg': ['view-front', 1800],
  'rear_side_view.jpg': ['view-rear', 1800],
  'top_side_view.png': ['view-top', 1800],
  'Swallow-tailed_Kite_AndyMorffew_FlickrCC_314.webp': ['kite', 1400],
  'rajput_aerodynamic_cfd_blueprint.jpg': ['cfd', 2000],
  'rajput_color_exploded_assembly.jpg': ['exploded-color', 2000],
  'rajput_dark_blueprint.jpg': ['blueprint-dark', 2000],
  'rajput_dark_exploded_blueprint.jpg': ['exploded-dark', 2000],
  'rajput_parchment_tech_sheet.jpg': ['sheet-parchment', 2000],
  'rajput_technical_spec_sheet.jpg': ['sheet-spec', 2000],
  'scene_01_dubai_skyline.jpg': ['scene-dubai', 1600],
  'scene_03_coastal_highway.jpg': ['scene-coastal', 1600],
  'scene_04_monaco_superyacht.jpg': ['scene-monaco', 1600],
  'scene_05_desert_canyon.jpg': ['scene-desert', 1600],
  'scene_06_tropical_maldives.jpg': ['scene-maldives', 1600],
  'scene_07_aerospace_hangar.jpg': ['scene-hangar', 1600],
  // scene_08_tokyo_cyberpunk.jpg is left out: that render shows a winged,
  // off-design aircraft.
  'scene_09_norway_fjords.jpg': ['scene-norway', 1600],
  'scene_10_rainforest_sunset.jpg': ['scene-rainforest', 1600],
  'scene_monaco_helipad_with_wheels.jpg': ['helipad', 2400],
}

const docs = {
  'Air_One_Rajput_Dossier.pdf': 'rajput-royale-dossier.pdf',
  'Air_One_Rajput_Engineering.pdf': 'rajput-royale-engineering.pdf',
}

await mkdir(imagesOut, { recursive: true })
await mkdir(docsOut, { recursive: true })

for (const [file, [name, width]] of Object.entries(images)) {
  const out = path.join(imagesOut, `${name}.webp`)
  const info = await sharp(path.join(source, file))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  console.log(`${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}

for (const [file, name] of Object.entries(docs)) {
  await copyFile(path.join(source, file), path.join(docsOut, name))
  console.log(`docs/${name}`)
}
