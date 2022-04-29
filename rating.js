const starEliments = document.querySelectorAll('.star');
const emojiEliments = document.querySelectorAll('.emoji');
const texts = ['Very Bad','Bad','Good','Very Good','Best'];
const colours = ['red','orangered','orange','greenyellow','green','rgb(69, 59, 59)'];
console.log(starEliments);
console.log(emojiEliments);
lastClick = 0;
lastHover = 0;
// defaults 
document.getElementById('text').innerHTML = 'Select Rating';


starEliments.forEach((starEliment, index) => {
    
    starEliment.addEventListener('click', () => {
        console.log('clicked' ,index);
        lastClick = index;
        starUpdate(index);
        emojiUpdate(index);
        document.getElementById('text').innerHTML = texts[index];
        // document.getElementById('text').style.color = colours[index];
        // document.getElementById('star').style.fill = colours[index];
    });
    
    // starEliment.addEventListener('mouseover', () => {
    //     console.log('hovered',index);
    //     lastHover = index;
    //     console.log(lastClick);
    //     hoverAdd(lastHover);
    // })
    // console.log(starEliment.addEventListener('mouseover'));
    // starUpdate(lastClick);
    // hoverRemove();
    
});

function starUpdate(index) {
    starEliments.forEach((starEliment, idx) => {
        if (idx <= index) {
            starEliment.classList.add('active');
            starEliment.style.fill = colours[index];
        }
        if (idx > index) {
            starEliment.classList.remove('active');
            starEliment.style.fill = colours[5];
        }
    })
}
function emojiUpdate(index) {
    emojiEliments.forEach((emojiEliment ,idx) => {
        if (idx == index) {
            emojiEliment.classList.remove('hidden');
        }
        else {
            emojiEliment.classList.add('hidden');
        }
    })
}

function hoverAdd(index) {
    starEliments.forEach((starEliment, idx) => {
        if (lastClick <= idx <= index) {
            starEliment.classList.add('active-hover');
        }

        if (idx > index) {
            starEliment.classList.remove('active-hover');
        }
    })
}
function hoverRemove() {
    starEliments.forEach((starEliment, idx) => { 
        starEliment.classList.remove('active-hover');
        
    })
}
