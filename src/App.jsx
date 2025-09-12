import './App.css'

function WebTitle(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
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