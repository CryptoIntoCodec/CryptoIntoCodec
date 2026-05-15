const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

async function generate(){
  const imagesDir = path.join(__dirname,'..','client','public','images')
  const files = await fs.readdir(imagesDir)
  const svgs = files.filter(f=>f.endsWith('.svg'))
  const widths = [480,768,1200]

  for(const file of svgs){
    const srcPath = path.join(imagesDir,file)
    const base = path.join(imagesDir, file.replace(/\.svg$/,''))
    const buffer = await fs.readFile(srcPath)
    for(const w of widths){
      const pngOut = `${base}-${w}.png`
      const webpOut = `${base}-${w}.webp`
      await sharp(buffer).resize({width:w}).png({quality:90}).toFile(pngOut)
      await sharp(buffer).resize({width:w}).webp({quality:80}).toFile(webpOut)
      console.log('wrote', pngOut, webpOut)
    }
  }
}

generate().catch(err=>{console.error(err); process.exit(1)})
