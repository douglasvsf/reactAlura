import "./index.css"
import CampoTexto from '../CampoTexto';
import Listasuspensa from "../Listasuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() // para o reload da pagina
        console.log('Formulario enviado com sucesso', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,cargo,imagem,time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite seu imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Listasuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario