function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  
  const wordPositions = new Map();
  for (const position of plainTextPositions) {
    wordPositions.set(plainText.slice(position.start, position.end), position);
  }

  
  const highlightWord = (word, start, end) => {
    const span = document.createElement("span");
    span.setAttribute("class", "highlight");
    span.textContent = word;
    htmlContent.replace(start, end, span.outerHTML);
  };

  for (const [word, position] of wordPositions) {
    highlightWord(word, position.start, position.end);
  }

  return htmlContent;
}


module.exports=highlightHTMLContent;