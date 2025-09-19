import { useState, useEffect } from 'react';
import './App.css'
import { getArticles } from "./utils/getArticles";

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

function LimitArticle() {
  return (
    <div>
      <h3>Mencapai Limit!</h3>
      <p>Anda sudah memasuki batas akhir untuk melihat article</p>
    </div>
  )
}


function App() {
  const [article, setArticle] = useState("");
  const [counterClick, setCounterClick] = useState(1);

  useEffect(() => {
    getArticles(counterClick).then(result => setArticle(result))
  }, [counterClick]);

  function nextArticle() {
  setCounterClick(counterClick+1)
}

function prevArticle() {
  setCounterClick(counterClick-1)
}

  return (
    <main>
      <WebTitle title="Netflix Clone" description="ini description web" />
      <Article title={article.title} description={article.body} />

      {counterClick > 5 ? <LimitArticle /> : "Belum mencapai"}

      <button onClick={prevArticle}>Prev Article</button>
      {counterClick}
      <button onClick={nextArticle}>Next Article</button>
    </main>
  )
}

export default App
