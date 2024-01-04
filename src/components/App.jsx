// COMO SE ESCRIBE UN COMPONENTE
//IMPORTAMOS EL HEADER QUE ACABAMOS DE HACER
import Header from './Header'
import Grid from './Grid'

//VAS A A LLAMAR A LA FUNCION DE LA MISMA MANERA DE COMO LLAMASTE A TU ARCHIVO COMO BUENA PRACTICA
function App() {
  return ( //ESTA FUNCION COMO EJEMPLO VA A RETORNAR CODIGO ESTATICO
    <>
      <Header />
      <main>
        <h1>Courses of EDTEAM</h1>
        <Grid></Grid>        
        
      </main>
    </>
  )
}  

export default App