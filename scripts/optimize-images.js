const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const inputDir = './public/Images';
const outputDir = './public/Images/optimized';
const sizes = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200
};

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create subdirectories
const subdirs = ['Hero Slider Images', 'Logos', 'Products'];
subdirs.forEach(dir => {
  const fullPath = path.join(outputDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

async function optimizeImage(inputPath, outputPath, width, quality = 80) {
  try {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const originalStats = fs.statSync(inputPath);
    const savings = ((originalStats.size - stats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirPath, outputSubdir) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(filePath, path.join(outputSubdir, file));
    } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
      // Process image files
      const fileName = path.parse(file).name;
      
      // Create optimized versions for different sizes
      for (const [sizeName, width] of Object.entries(sizes)) {
        const outputFileName = `${fileName}-${sizeName}.webp`;
        const outputPath = path.join(outputDir, outputSubdir, outputFileName);
        
        await optimizeImage(filePath, outputPath, width);
      }
      
      // Create original size optimized version
      const outputFileName = `${fileName}.webp`;
      const outputPath = path.join(outputDir, outputSubdir, outputFileName);
      await optimizeImage(filePath, outputPath, null, 85);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  try {
    await processDirectory(inputDir, '');
    console.log('\n✅ Image optimization completed!');
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    console.log('\n📊 Optimization includes:');
    console.log('- WebP format conversion');
    console.log('- Multiple responsive sizes');
    console.log('- Quality optimization');
    console.log('- Thumbnail generation');
  } catch (error) {
    console.error('❌ Optimization failed:', error);
  }
}

main(); 