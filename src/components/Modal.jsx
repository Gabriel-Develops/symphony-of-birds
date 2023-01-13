import Header from './Header'

const Modal = ({ modal, setModal }) => {
    return <section id='modal'>
        <div id='modal-blur'></div>
        <section id="modal-container">
          <Header title="How does it work?" buttonText="&#215;" modal={modal} setModal={setModal}/>
          <p>Symphony of Birds lets you create your very own symphony using bird sounds as instruments.</p>
          <p>Simply type in the name of the bird, add it to the symphony and wait for it to start chirping.</p>
          <p>If you want to remove a bird, simply click on the image of that bird and it will be kicked out of the symphony.</p>
          <p>The sounds are sourced from the <a href="https://xeno-canto.org/explore/api">Xenu Canto API</a>.</p>
          <p>The images of the birds are sourced from the <a href="https://developers.google.com/custom-search/v1/introduction">Custom Search JSON API</a>.</p>
          <p>See more of my work <a href="https://gabriel-dev.netlify.app/">here</a>.</p>
          <p>Favicon from <a href="https://icons8.com">Icons8</a>.</p>
        </section>
    </section>
}

export default Modal