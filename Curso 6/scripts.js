function getAdmins(map){

    let admins = [];

    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }

    }

    return admins;

}

const usuarios = new Map();

usuarios.set("Ricardo", "Admin");

usuarios.set("João", "Admin");

usuarios.set("Lara", "Users");


console.log(getAdmins(usuarios));