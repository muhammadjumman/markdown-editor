import './style.css';
import hljs from 'highlight.js'
import { marked } from 'marked'


const text = document.querySelector('#edit')
const show = document.getElementById('show')

text.addEventListener('input', function(e){
  console.log('tit wowrks')
  const value = text.value
  const htmlContent = marked(value);
  show.innerHTML = htmlContent;

  // Highlight the code blocks
  hljs.highlightAll();
})

text.style.width = `${(window.innerWidth/2)-100}px`
text.style.height = `${(window.innerHeight)-(window.innerHeight*(20/100))}px`

show.style.width = `${(window.innerWidth/2)-100}px`
show.style.height = `${(window.innerHeight)-(window.innerHeight*(20/100))}px`


if (window.innerWidth<900){

  text.style.width = `${(window.innerWidth)-5}px`
  text.style.height = `${(window.innerHeight)-30}px`
  
  show.style.width = `${(window.innerWidth)-5}px`
  show.style.height = `${(window.innerHeight)-30}px`

}
