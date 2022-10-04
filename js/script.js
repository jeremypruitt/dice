//const die = document.querySelector('.die');
const dice = document.querySelectorAll('.die');
const rollBtn = document.querySelector('.roll');
var hold = new Array(0,0,0,0,0,0);


for (let i = 0; i < dice.length; i++) {
  let die = dice[i];

  die.addEventListener("click", function(){
    if (hold[this.dataset.index] == 0) {
      hold[this.dataset.index] = 1;
      //die.classList.toggle("held");

      for (var j = 0; j < die.children.length; j++) {
        var child = die.children[j];
        if (child.classList) { child.classList.toggle('held') };
      }
    } else {
      hold[this.dataset.index] = 0;
      //die.classList.toggle("held");
      for (var j = 0; j < die.children.length; j++) {
        var child = die.children[j];
        if (child.classList) { child.classList.toggle('held') };
      }
    }
    //hold[this.dataset.index] = (hold[this.dataset.index] == 0) ? 1 : 0;
    //alert("Die: " + hold + " | this.dataset.index: " + this.dataset.index);
  });

  // if (hold[die.dataset.index] == 1) {
  //   continue;
  // }


  let randomDie = () => {

    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDie(random);
    } else {
        randomDie();
    }
  }

  const rollDie = random => {

    if (hold[die.dataset.index] == 1) {
      return;
    };
    die.style.animation = 'rolling 4s';

    setTimeout(() => {

      switch (random) {
        case 1:
          die.style.transform = 'rotateX(360deg) rotateY(360deg)';
          break;

        case 6:
          die.style.transform = 'rotateX(180deg) rotateY(360deg)';
          break;

        case 2:
          die.style.transform = 'rotateX(-450deg) rotateY(360deg)';
          break;

        case 5:
          die.style.transform = 'rotateX(450deg) rotateY(360deg)';
          break;

        case 3:
          die.style.transform = 'rotateX(360deg) rotateY(450deg)';
          break;

        case 4:
          die.style.transform = 'rotateX(360deg) rotateY(-450deg)';
          break;

        default:
          break;
      }

      die.style.animation = 'none';

    }, 4050);

  }

  rollBtn.addEventListener('click', randomDie);
}
