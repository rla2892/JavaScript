const getStyleHtml = function() {
  const styleElements = document.getElementsByTagName('style')
  let html = ''

  for (let i = 0; i < styleElements.length; i++) {
    html += styleElements[i].outerHTML
  }

  return html
}
