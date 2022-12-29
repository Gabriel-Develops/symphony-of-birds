const Header = ({ title, buttonText }) => {
  return (
    <header>
        <h1>{title}</h1>
        <button>{buttonText}</button>
    </header>
  )
}

export default Header