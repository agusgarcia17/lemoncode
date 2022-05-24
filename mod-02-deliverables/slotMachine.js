//Slot Machine

class SlotMachine {
    
    coins = 0;
    
    play(){ 

    let result = "Good luck next time!!";


    let roulette1 = Math.random() < 0.5; ; 
    let roulette2 = Math.random() < 0.5;; 
    let roulette3 = Math.random() < 0.5; ; 

    if(roulette1 && roulette2 && roulette3) {
        result = `Congratulations!!!. You won ${this.coins + 1} coins!!`
        this.coins = 0;
    }
    else {
        this.coins++
    }

    console.log(result);
  }

}


const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"