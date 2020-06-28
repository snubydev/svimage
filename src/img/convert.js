const fs = require('fs')
const imageDataURI = require('image-data-uri')

console.log('Convert images to base64 file')   

let buffer = ''

const files = [
   'img2_small.jpg',
   'Norco_Range_small.jpg'
]

const convert = async () => {
    files.forEach(f => {
        imageDataURI.encodeFromFile(f)
            .then(encoded => {
                const line = 'export var ' + getVarName(f) + ' = "' + encoded + '"\n'
                buffer += line
            })
    })

    await sleep(2000)

    fs.writeFile('image-base64.js', buffer, () => {
        console.log('done!');
    });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getVarName(filename) {
    return filename.toLowerCase().replace('.', '_').replace(' ', '_')
}

convert()

