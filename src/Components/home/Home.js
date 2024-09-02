import React from 'react';
import './home.css'

const Home = (props) => {
    return (
        <div className='form-container'>
            <form className='form-reclamacao'>
                <div className='form-select'>
                    <label for='escolha'>O que fazer: </label>
                    <select id='escolhas' name ='escolha'>
                        <option value="" key="">Reclamação</option>
                        <option value="" key="">Observação</option>
                    </select>
                </div>
                
                <div className='form-select'>
                    <label for="motivos">Motivo:</label>
                    <select id="motivos" name="motivos">
                        <option value="">Sujeira</option>
                        <option value="">Barulho</option>
                        <option value="">Cheiro</option>
                        <option value="">Garagem</option>
                    </select>
                </div>

                
                <div className='form-input apartamento'>
                    <label>Apartamento: </label>
                    <input type="text" id='apartamento' />
                </div>
                
                <div className='form-input'>
                    <label for="comments">Digite seus comentários:</label>
                    <textarea id="comments" name="comments" rows="5" cols="40" placeholder="Digite aqui..."></textarea>
                </div>
                <button className='enviar-button' type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Home;
