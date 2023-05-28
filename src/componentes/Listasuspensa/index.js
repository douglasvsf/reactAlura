import "./index.css"

const Listasuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item.id} >{item.nome}</option>)}
            </select>
        </div>
    )
}

export default Listasuspensa
