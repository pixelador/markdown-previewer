import { useState, ChangeEvent } from 'react';
import './App.css'

function App() {
  const [editorText, setEditorText] = useState('');
  const defaultValue = `# Welcome to my React Markdown Previewer!`;

  const handleInputChange = (e: ChangeEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    console.log('event', target.value);
    setEditorText(target.value);
  };

  return (
    <>
      <div className='m-8 md:container md:mx-auto flex flex-col lg:flex-row'>
        <div className="editorWrap flex-1">
          <div className="editorHeader">Editor</div>
          <textarea id="editor" onChange={handleInputChange} className='w-full' value="">
            {defaultValue}
          </textarea>
        </div>
        <div className="previewWrap flex-1">
          <div className="previewHeader">Preview</div>
          <div id="preview">
            {editorText}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
