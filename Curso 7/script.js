function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros !");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object !");

        if(typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo Number !");

        if(arr.length !== num) throw new RangeError("Tamanho inválido !");

        return arr;

    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Está erro é um ReferenceError");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Está erro é um TypeError");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Está erro é um RangeError");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado: ", e);
        }
    }


}


console.log(validaArray());