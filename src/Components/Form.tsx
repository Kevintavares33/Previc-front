import './Form.css'

const Form = () => {
  return (
        <div className="formulario">
            
    <form className="box-form">
         <label className="label">
         <h1 className='titulo'>Consulte Seu Processo</h1>
               <span className='numero'>N° Processo</span>
               <br></br>
               <input type="number" name="numero processo" placeholder="Numero" />
               <br></br>
               <span className='nome'>Nome da Empresa</span>
               <br></br>
               <input type="text" name="name" placeholder=" Nome" />
               <br></br>
               <span className='cnpj'>CPNJ</span>
               <br></br>
               <input type="number" name="cnpj" placeholder="xxx-xxx-xxx-xx" />
        </label>
        <br />
              <button className="btn" type='submit' value={"consultar"}>consultar</button>
    </form>
            
        </div>
  
  
        )
}

export default Form;