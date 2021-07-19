alert("coded by: Daniel Goddard")

window.onload = () => {
    let gender = 'male',
           height = 50,
           weight = 10;

    let texts = [


    ]

    document.querySelector('.calculate .gender div.male').onclick = function() {   
        gender = 'male';   
        this.classList.add('active');   
        document.querySelector('.calculate .gender div.female').className = 'female';
    }

    document.querySelector('.calculate .gender div.female').onclick = function() {   
        gender = 'female';   
        this.classList.add('active');   
        document.querySelector('.calculate .gender div.male').className = 'male';
    }


    document.querySelector('.calculate .height input').onchange = function() {   
        height = parseInt(this.value);   
        document.querySelector('.calculate .height p.val span').innerText = height;
    }

    document.querySelector('.calculate .height .val i.add').onclick = function() {   
        height += 1;   
        height = (height > 220) ? 220 : height;   
        document.querySelector('.calculate .height p.val span').innerText = height;   
        document.querySelector('.calculate .height input').value = height;   
    }

    document.querySelector('.calculate .height .val i.sub').onclick = function() {   
        height -= 1;   
        height = (height < 50) ? 50 : height;   
        document.querySelector('.calculate .height p.val span').innerText = height;   
        document.querySelector('.calculate .height input').value = height;   
    }


    document.querySelector('.calculate .weight input').onchange = function() {   
        weight = parseInt(this.value);   
        document.querySelector('.calculate .weight p.val span').innerText = weight;
    }

    document.querySelector('.calculate .weight .val i.add').onclick = function() {   
        weight += 1;   
        weight = (weight > 180) ? 180 : weight;   
        document.querySelector('.calculate .weight p.val span').innerText = weight;   
        document.querySelector('.calculate .weight input').value = weight;   
    }

    document.querySelector('.calculate .weight .val i.sub').onclick = function() {   
        weight -= 1;   
        weight = (weight < 10) ? 10 : weight;   
        document.querySelector('.calculate .weight p.val span').innerText = weight;   
        document.querySelector('.calculate .weight input').value = weight;   
    }



    document.querySelector('.calculate .calc').onclick = function() {   
        let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);   
        height = 50;   
        weight = 10;   
        document.querySelector('.calculate .weight input').value = weight;   
        document.querySelector('.calculate .weight p.val span').innerText = weight;   
        document.querySelector('.calculate .height input').value = height;   
        document.querySelector('.calculate .height p.val span').innerText = height;   
        document.querySelector('.result .val').innerText = bmi;

           
        if (bmi < 18.5) {       
            document.querySelector('.result .text').innerText = 'YOU ARE UNDERWEIGHT!';       
            document.querySelector('.result .val').style.color = '#3F51B5'       
            document.querySelector('.result .text').style.color = '#3F51B5'   
        }


           
        if (bmi >= 18.5 && bmi < 25) {       
            document.querySelector('.result .text').innerText = 'YOU HAVE A HEALTHY WEIGHT!';       
            document.querySelector('.result .val').style.color = '#0f4'       
            document.querySelector('.result .text').style.color = '#0f4'   
        }

           
        if (bmi >= 25 && bmi < 30) {       
            document.querySelector('.result .text').innerText = 'YOU ARE OVERWEIGHT!';       
            document.querySelector('.result .val').style.color = '#ffc107'       
            document.querySelector('.result .text').style.color = '#ffc107'   
        }

           
        if (bmi >= 30) {       
            document.querySelector('.result .text').innerText = 'YOU ARE OBESE!';       
            document.querySelector('.result .val').style.color = '#f00'       
            document.querySelector('.result .text').style.color = '#f00'   
        }


           
        document.querySelector('.calculate').style.display = 'none';   
        document.querySelector('.result').style.display = 'flex';
    }

    document.querySelector('.result .recalc').onclick = function() {   
        document.querySelector('.calculate').style.display = 'flex';   
        document.querySelector('.result').style.display = 'none';
    }
}