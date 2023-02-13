// this is the class
const msg = document.querySelector('.msg');

// this is the tag
const guess = document.querySelector('input');

// this is also class
const btn = document.querySelector('.btn');

let play = false;
let new_wrd = "";
let random_word = "";

let words = ['Python' , 'Javascript' , 'CPP' , 'PHP' , 'Java' , 'C#' , 'HTML' , 'CSS' , 'ReactJS' , 'Angular' , 'Swift' , 'Android' , 'SQL'];

const create_new_word = () =>{    
    let random_number = Math.floor(Math.random()*words.length);
    let new_word = words[random_number];
    return new_word;
}

const scramble_words = (arr) =>{
    for(let i = arr.length - 1 ; i > 0 ; i--)
    {
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}


btn.addEventListener('click' , function(){
    if(!play)
    {
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        new_wrd = create_new_word();
        random_word = scramble_words(new_wrd.split("")).join("");
        msg.innerHTML = `Guess the word : ${random_word}`;
    }

    else
    {
        let temp_word = guess.value;
        if(temp_word === new_wrd)
        {
            play = false;
            msg.innerHTML = `Awesome It's correct. It is ${new_wrd}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }

        else
        {
            msg.innerHTML = "Sorry , it is incorrect please tyr again";
        }
    }
});