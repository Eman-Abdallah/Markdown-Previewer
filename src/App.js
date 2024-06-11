import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(defaultMarkdown);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const renderMarkdown = (markdown) => {
    marked.setOptions({
      breaks: true
    });
    return { __html: marked(markdown) };
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
      <div id="preview" dangerouslySetInnerHTML={renderMarkdown(markdown)}></div>
    </div>
  );
};

const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

export default App;
