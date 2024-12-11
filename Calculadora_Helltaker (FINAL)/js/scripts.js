document.addEventListener('keydown', function(event)
{ 
    const key = event.key; 
    if (!isNaN(key)) { 
        insert(key); 
    } else if (key === '+') { 
        insert('+'); 
    } else if (key === '-') { 
        insert('-'); 
    } else if (key === '*') { 
        insert('*'); 
    } else if (key === '/') { 
        insert('/'); 
    } else if (key === 'Enter') 
        { event.preventDefault();
        result(); 
    } else if (key === 'Backspace') { 
        back(); 
    } else if (key === 'c' || key === 'C') { 
        clean(); 
    } else if (key === '.') { 
        insert('.'); 
    } 
});
function setInitialBackground() 
{ 
    document.body.style.backgroundImage = 'url(css/helltaker_logo2.png)'; 
}
function insert(num) { 
    var numero = document.getElementById('resultado_atual').innerHTML; 
    document.getElementById('resultado_atual').innerHTML = numero + num; 
} 
function clean() { 
    document.getElementById('resultado_atual').innerHTML = ""; 
} 
function back() { 
    var resultado_atual = document.getElementById('resultado_atual').innerHTML; 
    document.getElementById('resultado_atual').innerHTML = resultado_atual.substring(0, resultado_atual.length - 1); 
} 
/* FINALMENTEEEEE AAAAAAAAAEEEEEEEEEEEEE, EUCONSEGUI MUDAR O BACKGROUND IMAGE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA CAKTCHAAAAUUUUUUUU JACKPOT
SMOOOOKING SEXY STALYYYYYYYYYYYYYYY. TRIPLE S NESSA PORRAAAAAAAAAAAAAAAAAAAAAAA 5 HORAS SÓ NESSA MEDA HAHAHAAHAHAHAQHAAHAHAAHAHAHAHAHAAHAHAHAAAAAAAA o erro tava aqui <body onload="setInitialBackground()">*/
function result() { 
    var resultado_atual = document.getElementById('resultado_atual').innerHTML; 
    if (resultado_atual) { 
        var calculado = eval(resultado_atual); 
        document.getElementById('resultado_atual').innerHTML = calculado; 
        if (calculado == '1212') { 
           document.body.style.backgroundImage = 'url(css/helltaker_logo2.png)'; 
           document.getElementById('musica').src = "vitality.mp3";
           document.getElementById('musica').play();
        } else if (calculado == '2121') { 
            document.body.style.backgroundImage = 'url(css/judgment_background.png)'; 
            document.getElementById('musica').src = "Mittsies - Epitomize(MP3_160K).mp3";
            document.getElementById('musica').play();
        } else if (calculado == '1000') { 
            document.body.style.backgroundImage = 'url(css/Vergil_background.png)'; 
            document.getElementById('musica').src = "Bury the Light - Vergil_s battle theme from Devil May Cry 5 Special Edition(MP3_128K).mp3";
            document.getElementById('musica').play();
        } else if (calculado == '290') {
            document.body.style.backgroundImage = 'url(css/Miss%20circle_background.png)';
            document.getElementById('musica').src = "basics-in-behavior.mp3";
            document.getElementById('musica').play();
        }
    } else { 
        document.getElementById('resultado_atual').innerHTML = "...?";
    } 
}