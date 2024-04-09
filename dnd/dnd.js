function rollForza() {
    let stat = Math.floor(Math.random() * 11) + 8;
    document.getElementById('forza').value = stat;
}

function rollDestrezza() {
    let stat = Math.floor(Math.random() * 11) + 8;
    document.getElementById('destrezza').value = stat;
}

function rollCostituzione() {
    let stat = Math.floor(Math.random() * 11) + 8;
    document.getElementById('costituzione').value = stat;
}

function rollIntelligenza() {
    let stat = Math.floor(Math.random() * 11) + 8;
    document.getElementById('intelligenza').value = stat;
}

function rollSaggezza() {
    let stat = Math.floor(Math.random() * 11) + 8;
    document.getElementById('saggezza').value = stat;
}

function rollCarisma() {
    let stat = Math.floor(Math.random() * 11) + 8;
    document.getElementById('carisma').value = stat;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Aggiungi un event listener per l'evento 'change' a ogni input
    ['forza', 'destrezza', 'costituzione', 'intelligenza', 'saggezza', 'carisma'].forEach(id => {
        document.getElementById(id).addEventListener('change', function() {
            // Calcola il modificatore ogni volta che il valore dell'input cambia
            let modifier = calculateModifier(id);
            // Scrivi il modificatore nell'elemento di output
            document.getElementById(id + 'Modifier').innerText = modifier;
        });
    });
});

function calculateModifier(inputId, outputId) {
    // Prendi il valore dall'input
    let value = Number(document.getElementById(inputId).value);

    // Controlla il valore e assegna il modificatore corrispondente
    let modifier;
    if (value >= 8 && value <= 9) {
        modifier = -1;
    } else if (value >= 10 && value <= 11) {
        modifier = 0;
    } else if (value >= 12 && value <= 13) {
        modifier = 1;
    } else if (value >= 14 && value <= 15) {
        modifier = 2;
    } else if (value >= 16 && value <= 17) {
        modifier = 3;
    } else if (value >= 18 && value <= 19) {
        modifier = 4;
    } else if (value == 20) {
        modifier = 5;
    } else {
        modifier = "Valore non valido";
    }

    // Scrivi il modificatore nell'elemento di output
    document.getElementById(outputId).innerText = modifier;
}
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

/*document.addEventListener('DOMContentLoaded', function () {
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
});*/