import { Link } from 'react-router-dom';

function Home(){
    retur(
        <div>
            <h1>Bem-vindo (a) à página Home</h1>
            <span>Pedro Henrique Thomen</span>

            <link to="/sobre">Sobre</link>
            <link to="/contato">Contato</link>
            <hr/>

            <link to="/produto/1">Acessar Produto 1</link>
        </div>

    );

}

export default Home;