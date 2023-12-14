// COMO SE ESCRIBE UN COMPONENTE
//IMPORTAMOS EL HEADER QUE ACABAMOS DE HACER
import Header from './Header'

//VAS A A LLAMAR A LA FUNCION DE LA MISMA MANERA DE COMO LLAMASTE A TU ARCHIVO COMO BUENA PRACTICA
function App() {
  return ( //ESTA FUNCION COMO EJEMPLO VA A RETORNAR CODIGO ESTATICO
    <>
      <Header />
      <main>
        <h1>Mi primer componente</h1>
      </main>
    </>
  )
}  

export default App