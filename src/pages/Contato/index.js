import { Link } from 'react-router-dom';

function Contato(){
    retur(
        <div>
            <h1>Página de Contato</h1>
            <span>Campo Real</span>

            <link to="/sobre">Sobre</link>
            <link to="/home">Home</link>
            <hr/>

            <link to="/produto/1">Acessar Produto 1</link>
        </div>

    );

}

export default Contato;