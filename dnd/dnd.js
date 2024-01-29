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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('razza').addEventListener('change', function() {
        var razza = this.value;
        var corpo = document.getElementsByClassName('corpo');
        for (let i = 0; i < corpo.length; i++) {
            let singoloCorpo = corpo[i];
            switch (razza) {
                case 'umano':
                    singoloCorpo.style.boxShadow = '0px 0px 30px yellow';
                    break;
                case 'elfo':
                    singoloCorpo.style.boxShadow = '0px 0px 30px green';
                    break;
                case 'nano':
                    singoloCorpo.style.boxShadow = '0px 0px 30px blue';
                    break;
                case 'mezzelfo':
                    singoloCorpo.style.boxShadow = '0px 0px 30px brown';
                    break;
                case 'mezzorco':
                    singoloCorpo.style.boxShadow = '0px 0px 30px gray';
                    break;
                case 'gnomo':
                    singoloCorpo.style.boxShadow = '0px 0px 30px white';
                    break;
                case 'halfling':
                    singoloCorpo.style.boxShadow = '0px 0px 30px purple';
                    break;
                case 'dragonide':
                    singoloCorpo.style.boxShadow = '0px 0px 30px yellow';
                    break;
                case 'tiefling':
                    singoloCorpo.style.boxShadow = '0px 0px 30px pink';
                    break;
                default:
                    singoloCorpo.style.boxShadow = '0px 0px 30px red';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const corpoDivs = document.querySelectorAll('.corpo');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const allFieldsFilled = Array.from(form.elements).every(function (element) {
            return element.type !== 'submit' && element.value.trim() !== '';
        });

        if (allFieldsFilled) {
            corpoDivs.forEach(function (corpoDiv) {
                corpoDiv.style.display = 'none';
            });

            corpoDivs.forEach(function (corpoDiv, index) {
                setTimeout(function () {
                    corpoDiv.style.display = 'block';
                }, index * 1000);
            });
        } else {
            alert('Compila tutti i campi del form prima di procedere.');
        }
    });
});

// jQuery

