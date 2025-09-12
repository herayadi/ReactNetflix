import { useState } from 'react';
import './App.css'

function WebTitle(props) {
  const [title, setTitle] = useState(props.title);
  const desc = props.description;

  function changeState() {
    setTitle("Heri Rahmat")
  }


  return (
    <header>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button onClick={changeState}>Ganti Judul Web</button>
    </header>
  )
}

function Article(props) {
  const title = props.title;
  const desc = props.description;
  return (
      <article>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

function App() {
  return (
    <main>
      <WebTitle title="Netflix Clone" description="ini description web" />
      <Article title="Judul Article Kesatu" description="Ini Description Kesatu" />
      <Article title="Judul Article Kedua" description="Ini Description Kedua" />
    </main>
  )
}

export default App