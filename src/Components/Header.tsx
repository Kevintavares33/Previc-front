import './Header.css'

export const Header = () => {
  return (
    <div className='cabeçalho'>
        <h1>Previc</h1>

        <ul>
            <li>
                <a href='#'>
                Inicio
                </a>

                <a href='#'>
                Sobre
                </a>

                <a href='#'>
                Cadastrar
                </a>

           
            </li>
        </ul>


    </div>
  )
}
export default Header;