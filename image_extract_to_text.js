// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Convert inf text to text</title>
  <!-- v5 -->
<script src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'></script>
</head>
<body>

  <input type="file" id="imageInput" accept="image/*">
  <button onclick="extractText()">Extract Text</button>
  <div id="outPut"></div>

  <script src="/script.js"></script>
</body>
</html>
// javascript code

const extractText = () => {
  const fileInput = document.getElementById('imageInput')
  const outPUT = document.getElementById('outPut')
  const imagesFile = fileInput.files[0]
  if (!imagesFile) {
    outPUT.textContent = 'Please select an image file'
    return
  }
  Tesseract.recognize(
    imagesFile,
    'eng'
  ).then(({data})=>{
    outPUT.textContent = data.text
  }).catch((error)=>{
    console.log('Error', error)
    outPUT.textContent = 'Error'
  })
}
