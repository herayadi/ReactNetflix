import './App.css'

function WebTitle() {
  return (
    <h1> Netflix</h1>
  )
}

function Articles() {
  return (
    <div>
      <article>
        <h3>Judul Article Pertama</h3>
        <p1>Desc article pertama</p1>
      </article>
      <article>
        <h3>Judul Article Kedua</h3>
        <p1>Desc article Kedua</p1>
      </article>
    </div>
  )
}

function App() {
  return (
    <main>
      <WebTitle />
      <Articles />
    </main>
  )
}

export default App