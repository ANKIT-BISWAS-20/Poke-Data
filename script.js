
async function getpokemon(name){
    let url = "https://pokeapi.co/api/v2/pokemon/"+String(name);
    let res = await fetch(url);
    let pokemon = await res.json();
    let pname = pokemon["name"];
    let p_id = pokemon["id"];
    let height = pokemon["height"];
    let weight = pokemon["weight"];
    let type = pokemon["types"][0]["type"]["name"];
    let abilities = [pokemon["abilities"][0]["ability"]["name"],pokemon["abilities"][1]["ability"]["name"]];
    let hp = pokemon["stats"][0]["base_stat"];
    let attack = pokemon["stats"][1]["base_stat"];
    let defence = pokemon["stats"][2]["base_stat"];
    let special_attack = pokemon["stats"][3]["base_stat"];
    let special_defence = pokemon["stats"][4]["base_stat"];
    let speed = pokemon["stats"][5]["base_stat"];
    const moves=[];
    for(let i =0 ; i<8
         ; i++){
        moves[i] =pokemon["moves"][i]["move"]["name"];
    }    
    let img1 = pokemon["sprites"]["front_default"];
    let img2 = pokemon["sprites"]["back_default"];

    let exp = pokemon["base_experience"];

    // console.log(pokemon);
    // console.log(pname);
    // console.log(p_id);
    // console.log(height);
    // console.log(weight);
    // console.log(type);
    // console.log(abilities);
    // console.log(hp);
    // console.log(attack);
    // console.log(defence);
    // console.log(special_attack);
    // console.log(special_defence);
    // console.log(speed);
    // console.log(moves);
    document.getElementById("name").innerHTML= pname;
    document.getElementById("pid").innerHTML= p_id;
    document.getElementById("type").innerHTML= type;
    document.getElementById("height").innerHTML= height;
    document.getElementById("weight").innerHTML= weight + String(" lbs");
    document.getElementById("abilities").innerHTML= abilities;
    document.getElementById("hp").innerHTML= hp;
    document.getElementById("attack").innerHTML= attack;
    document.getElementById("defence").innerHTML= defence;
    document.getElementById("spatt").innerHTML= special_attack;
    document.getElementById("spdef").innerHTML= special_defence;
    document.getElementById("speed").innerHTML= speed;
    document.getElementById("moves").innerHTML= moves;
    document.getElementById("i1").src= img1;
    document.getElementById("i2").src= img2;
    document.getElementById("exp").innerHTML= exp;
    
    
}




function search_pokemon() {
    let input = document.getElementById('sb').value;
    input=input.toLowerCase();
    getpokemon(input); 
}

function searchback(){
    let ip1 = document.getElementById("pid").innerHTML;
    ip1 = Number(ip1);
    ip1 = ip1-1;
    getpokemon(ip1);
}

function searchnext(){
    let ip2 = document.getElementById("pid").innerHTML;
    ip2 = Number(ip2);
    ip2 = ip2+1;
    getpokemon(ip2);
}

getpokemon(1);

function contact(){
    window.open("https://ankit-biswas-20.github.io/BISWAS-INDUSTRIES","_blank");
}

function gt(num){
    switch(num){
        case 1:
            window.open("https://www.facebook.com/profile.php?id=100079956308306&mibextid=ZbWKwL","_blank");
            break;
        case 2:
            window.open("https://instagram.com/ankit_b15w45?igshid=ZGUzMzM3NWJiOQ==","_blank");
            break;
        case 3:
            window.open("https://www.youtube.com/@factx9641","_blank");
            break;
        case 4:
            window.open("https://www.linkedin.com/in/ankit-biswas-a03899257","_blank");
            break;
        case 5:
            window.open("https://github.com/ANKIT-BISWAS-20","_blank");
            break;
        case 6:
            window.open("https://ankit-biswas-20.github.io/BISWAS-INDUSTRIES","_blank");
            break;

    }
}
