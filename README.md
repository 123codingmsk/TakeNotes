<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README - TakeNotes Project</title>
</head>
<body>
  <h1>TakeNotes Project</h1>
  <p>A simple note-taking application built with React, utilizing Material-UI for icons and animations.</p>

  <h2>Features</h2>
  <ul>
    <li>Add notes with a title and content.</li>
    <li>Delete notes by clicking the delete button.</li>
    <li>Expand the input area for creating notes by clicking on the textarea.</li>
  </ul>

  <h2>Components</h2>
  <ul>
    <li><strong>App.js:</strong> The main component managing state and rendering the other components.</li>
    <li><strong>CreateArea.js:</strong> A form for creating new notes with an expandable input field.</li>
    <li><strong>Note.js:</strong> Displays individual notes with a delete button.</li>
    <li><strong>Header.js:</strong> Displays the app's header with a title and icon.</li>
    <li><strong>Footer.js:</strong> Displays a footer with the current year.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>Material-UI (Icons and Animations)</li>
    <li>JavaScript (ES6+)</li>
    <li>HTML & CSS</li>
  </ul>

  <h2>How to Run the Project</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/123codingmsk/TakeNotes.git</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd takenotes</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Start the development server:</li>
    <pre><code>npm start</code></pre>
    <li>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</li>
  </ol>

  <h2>Project Structure</h2>
  <pre><code>
  takenotes/
  ├── src/
  │   ├── components/
  │   │   ├── CreateArea.js
  │   │   ├── Footer.js
  │   │   ├── Header.js
  │   │   ├── Note.js
  │   ├── App.js
  │   ├── index.js
  │   └── index.css
  └── package.json
  </code></pre>
  
</body>
</html>
