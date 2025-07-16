import { readFileSync, existsSync } from 'fs';
import { resolve, extname, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const directoryPath = dirname(currentFilePath);

const supportedExtensions = '(svg|png|jpg|jpeg|gif|webp)';
const mimeTypes = {
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
};

/**
 * Get the path of the image relative to the project
 * @param {string} filePath The full path of the image
 * @param {string} name The name of the folder where the image is located
 *
 */
const getPath = (filePath, name) => {
  const index = filePath.indexOf(name) + (name.length + 1);
  return filePath.substring(index);
};

const imageUrlRegex = new RegExp(
  `url\\(['"]?(.*?\\.(${supportedExtensions}))['"]?\\)`
);

/**
 * Get the image URL from the CSS declaration
 * @param {string} value The value of the CSS declaration
 *
 */
const getImageURL = value => {
  return value?.match?.(imageUrlRegex)?.[1];
};

/**
 * Replace the image path with the base64 data
 * @param {string} value The value of the CSS declaration
 * @param {string} base64Data The base64 data of the image
 *
 * @returns {string} The CSS declaration with the base64 data
 *
 */
const replaceImageWithBase64 = (value, base64Data) => {
  return value.replace(imageUrlRegex, base64Data);
};

/**
 * Read the image file and convert it to base64
 * @param {Declaration} decl The CSS declaration
 * @param {string} actualImagePath The full path of the image
 *
 */
const convertImageToBase64 = (decl, actualImagePath) => {
  if (existsSync(actualImagePath)) {
    const imageBuffer = readFileSync(actualImagePath);
    const base64 = imageBuffer.toString('base64');
    const mimeType = mimeTypes[extname(actualImagePath).slice(1)];

    // Inline the base64 data as the value of the CSS declaration
    const base64Data = `url('data:${mimeType};base64,${base64}')`;
    decl.value = replaceImageWithBase64(decl.value, base64Data);
  } else {
    console.warn(`Image file not found: ${actualImagePath}`);
  }
};

export const resolveImageUrls = (
  /**
   * The folder name where the images will be copied.
   * @default 'assets'
   * @param
   */
  folderName = 'assets',
  /**
   * The source of the orginal path.
   * @default 'src/'
   * @param
   */
  sourcePath = 'src/'
) => {
  return {
    postcssPlugin: 'custom-image-resolver',
    Declaration(decl) {
      const cssImagePath = getImageURL(decl.value);
      if (cssImagePath) {
        // get the image path relative to the project
        const imagePath = join(folderName, getPath(cssImagePath, folderName));
        const actualImagePath = resolve(directoryPath, sourcePath, imagePath);
        convertImageToBase64(decl, actualImagePath);
      }
    },
  };
};

resolveImageUrls.postcss = true;
