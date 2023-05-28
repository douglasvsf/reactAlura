import "./index.css"
import CampoTexto from '../CampoTexto';
import Listasuspensa from "../Listasuspensa";
import Botao from "../Botao";

function ComponenteForm() {
    const obrigatorio = true
    const listaCampos = [
      { id: 1, nome: 'Nome', },
      { id: 2, nome: 'Cargo' },
      { id: 3, nome: 'Imagem' },
    ];
  
    return (
        listaCampos.map((elemento) => (
          <CampoTexto obrigatorio={obrigatorio} key={elemento.id} label={elemento.nome} placeholder={"Digite seu " + elemento.nome}/>
        ))
    );
  }

const Formulario = () => {

    const labelLista = 'Time'
    const textoBotao = 'Criar card'
    const times = [
        { id: 1, nome: 'Programação', },
        { id: 2, nome: 'Front-End' },
        { id: 3, nome: 'Data Science' },
        { id: 4, nome: 'Devops' },
        { id: 5, nome: 'Mobile' },
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault() // para o reload da pagina
        console.log('Formulario enviado com sucesso')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ComponenteForm />
                <Listasuspensa label={labelLista} itens={times} />
                <Botao>
                    {textoBotao}
                </Botao>
            </form>
        </section>
    )
}

export default Formulario