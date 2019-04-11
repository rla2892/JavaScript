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
    let cssRules = styleSheets[i].cssRules

    for (let j = 0; j < cssRules.length; j++) {
      styleText += cssRules[j].cssText;
    }
  }

  return styleText
}

getStyle()
