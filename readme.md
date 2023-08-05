
# Highlight HTML Content

This project provides a function `highlightHTMLContent` that takes in an HTML content string, a plain text string, and an array of plain text positions to highlight. The function returns the updated HTML content with the specified words highlighted.

## Usage

```javascript
const highlightHTMLContent = require('./highlightHTMLContent');

const htmlContent = '<p>This is some sample text.</p>';
const plainText = 'This is some sample text.';
const plainTextPositions = [{ start: 0, end: 4 }, { start: 8, end: 12 }];

const updatedHtmlContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
```

The above code will highlight the words "This" and "some" in the HTML content.

## Function Parameters

- `htmlContent` (string): The HTML content to be updated.
- `plainText` (string): The plain text version of the HTML content.
- `plainTextPositions` (array): An array of objects representing the start and end positions of the words to be highlighted in the plain text.

## Function Output

The function returns a string representing the updated HTML content with the specified words highlighted.