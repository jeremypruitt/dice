const dice = document.querySelectorAll('.die');
const rollBtn = document.querySelector('.roll');
const resetBtn = document.querySelector('#reset');

var hold = new Array(0,0,0,0,0);
var rolls = 3;

function gameinit() {
    let rolls_orig = rolls;
    let hold_orig = hold;
    rolls = 3;
    hold = Array(0,0,0,0,0);
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        for (var j = 0; j < die.children.length; j++) {
            die.children[j].classList.remove('held');
        }
    }
};

resetBtn.classList.toggle('disabled');
resetBtn.addEventListener("click", function(){
    gameinit();
});

for (let i = 0; i < dice.length; i++) {
    let die = dice[i];

    // Toggle die as held/unheld when clicked
    die.addEventListener("click", function(){
        if (hold[this.dataset.index] == 0) {
            hold[this.dataset.index] = 1;
            for (var j = 0; j < die.children.length; j++) {
                die.children[j].classList.toggle('held');
            }
        } else {
            hold[this.dataset.index] = 0;
            for (var j = 0; j < die.children.length; j++) {
                die.children[j].classList.toggle('held');
            }
        }
    });
}

function rollDice(dice) {
    if (rolls == 0) { return };
    rolls = rolls - 1;
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        if (hold[die.dataset.index] == 1) { continue };

        die.style.animation = 'rolling 4s';

        // Get random number between 1-6 and call roll dice animation
        const random = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            switch (random) {
                case 1: die.style.transform = 'rotateX(360deg)  rotateY(360deg)';  break;
                case 2: die.style.transform = 'rotateX(-450deg) rotateY(360deg)';  break;
                case 3: die.style.transform = 'rotateX(360deg)  rotateY(450deg)';  break;
                case 4: die.style.transform = 'rotateX(360deg)  rotateY(-450deg)'; break;
                case 5: die.style.transform = 'rotateX(450deg)  rotateY(360deg)';  break;
                case 6: die.style.transform = 'rotateX(180deg)  rotateY(360deg)';  break;
                default: break;
            }

            die.style.animation = 'none';
        }, 4050);
    }
}

//rollBtn.addEventListener("click", function(){ randomDie() });
rollBtn.addEventListener("click", function(){ rollDice(dice) });

