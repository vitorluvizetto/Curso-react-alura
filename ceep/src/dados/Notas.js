class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(funcao => funcao !== func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNotas(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}

export default ArrayDeNotas;