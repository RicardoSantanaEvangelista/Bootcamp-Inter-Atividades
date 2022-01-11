class ContaBncaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;

    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada, saldo insuficiente !";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}


class contaCorrente extends ContaBncaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}


class contaPoupanca extends ContaBncaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}


class contaUniversitaria extends ContaBncaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada !";
        }

        this._saldo = this._saldo - valor;
    }
}

