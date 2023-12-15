function rollStats(event) {
    event.preventDefault();
    let stats = [];
    for (let i = 0; i < 6; i++) {
        let rolls = [];
        for (let j = 0; j < 4; j++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort();
        rolls.shift();
        let sum = rolls.reduce((a, b) => a + b, 0);
        stats.push(sum);
    }

    stats.sort((a, b) => b - a);
    document.getElementById("forza").value = stats[0];
    document.getElementById("destrezza").value = stats[1];
    document.getElementById("costituzione").value = stats[2];
    document.getElementById("intelligenza").value = stats[3];
    document.getElementById("saggezza").value = stats[4];
    document.getElementById("carisma").value = stats[5];

    let modifiers = [];
    for (let i = 0; i < stats.length; i++) {
        let modifier = Math.floor((stats[i] - 10) / 2);
        modifiers.push(modifier);
    }
    document.getElementById("forza-mod").textContent = modifiers[0];
    document.getElementById("destrezza-mod").textContent = modifiers[1];
    document.getElementById("costituzione-mod").textContent = modifiers[2];
    document.getElementById("intelligenza-mod").textContent = modifiers[3];
    document.getElementById("saggezza-mod").textContent = modifiers[4];
    document.getElementById("carisma-mod").textContent = modifiers[5];
}

window.onload = function() {
    document.getElementById('rollButton').addEventListener('click', rollStats);
}  



// prove di come fare funzionare la scelta della classe bisogna sistemare!!!

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('classe').addEventListener('change', function() {
        var classe = this.value;
        var body = document.body;

        switch(classe) {
            case 'barbaro':
                body.style.backgroundColor = 'red';
                break;
            case 'bardo':
                body.style.backgroundColor = 'green';
                break;
            case 'chierico':
                body.style.backgroundColor = 'blue';
                break;
            case 'druido':
                body.style.backgroundColor = 'brown';
                break;
            case 'guerriero':
                body.style.backgroundColor = 'gray';
                break;
            case 'ladro':
                body.style.backgroundColor = 'white';
                break;
            case 'mago':
                body.style.backgroundColor = 'purple';
                break;
            case 'monaco':
                body.style.backgroundColor = 'yellow';
                break;
            case 'paladino':
                body.style.backgroundColor = 'pink';
                break;
            case 'ranger':
                body.style.backgroundColor = 'green';
                break;
            case 'stregone':
                body.style.backgroundColor = 'orange';
                break;
            case 'warlock':
                body.style.backgroundColor = 'lightblue';
                break;
            default:
                body.style.backgroundColor = 'black';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() { //non fa
    document.getElementById('razza').addEventListener('change', function() {
        var razza = this.value;
        var corpo = document.body;

        switch(razza) {
            case 'umano':
                corpo.style.boxShadow = '10px 10px 5px black';
                break;
            case 'elfo':
                corpo.style.boxShadow = '10px 10px 5px green';
                break;
            case 'nano':
                corpo.style.boxShadow = '10px 10px 5px blue';
                break;
            case 'mezzelfo':
                corpo.style.boxShadow = '10px 10px 5px brown';
                break;
            case 'mezzorco':
                corpo.style.boxShadow = '10px 10px 5px gray';
                break;
            case 'gnomo':
                corpo.style.boxShadow = '10px 10px 5px white';
                break;
            case 'halfling':
                corpo.style.boxShadow = '10px 10px 5px purple';
                break;
            case 'dragonide':
                corpo.style.boxShadow = '10px 10px 5px yellow';
                break;
            case 'tiefling':
                corpo.style.boxShadow = '10px 10px 5px pink';
                break;
            default:
                corpo.style.boxShadow = '10px 10px 5px red';
        }
    });
});