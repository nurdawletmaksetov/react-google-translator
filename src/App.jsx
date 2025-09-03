import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,zh",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      )
    }
  }, [])

  return (
    <>
      <h1>My Google Translator Website</h1>
      <div id='google_translate_element'>
      </div>
    </>
  )
}

export default App
