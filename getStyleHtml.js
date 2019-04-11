const getStyleHtml = function() {
  const styleElements = document.getElementsByTagName('style')
  let html = ''

  for (let i = 0; i < styleElements.length; i++) {
    html += styleElements[i].outerHTML
  }

  return html
}

const getStyle = function() {
  let styleText = "";
  const styleSheets = document.styleSheets;

  for (let i = 0; i < styleSheets.length; i++) {
    try {
      let cssRules = styleSheets[i].cssRules
      for (let j = 0; j < cssRules.length; j++) {
        styleText += "\n"
        styleText += cssRules[j].cssText;
        console.log(i, j)
      }
    }
    catch (e) {
      continue
    }
  }

  return styleText
}

getStyle()
