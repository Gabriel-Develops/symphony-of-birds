const Header = ({ title, buttonText, modal, setModal }) => {
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <header>
        <h1>{title}</h1>
        <button onClick={toggleModal}>{buttonText}</button>
    </header>
  )
}

export default Header