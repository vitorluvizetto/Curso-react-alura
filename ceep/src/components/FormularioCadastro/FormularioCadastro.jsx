import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem Categoria";
        this.state = { categorias: [] }

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    _handleMudancaCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);

    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input className="form-cadastro_input" type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
                <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
                    <option >Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}</select>
                <textarea rows={15} className="form-cadastro_input" placeholder="Escreva sua nota..." onChange={this._handleMudancaTexto.bind(this)}></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;