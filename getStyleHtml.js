//inline 과 internal 스타일 불러옴.
//external 불가
const getStyleHtml = function() {
  const styleElements = document.getElementsByTagName('style')
  let html = ''

  for (let i = 0; i < styleElements.length; i++) {
    html += styleElements[i].outerHTML
  }

  return html
}

//inline, internal, external 모두 불러옴.
const getStyle = function() {
  let styleText = "";
  styleText += "<style>";
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
  
  styleText += "</style>";
  
  return styleText
}

getStyle()
