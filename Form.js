class Form {

    constructor() {
        this.title = createElement('h1', "Survey regarding school functioning during the Coronavirus pandemic");
        
        this.input1 = createInput("Name");
        this.input2 = createInput("email")
        
        
        this.question1 = createElement('h3', "1. Do you think we should start physical classes?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "2. Should the students be promoted to the next class without writing the exam?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "3. Do you think it is necessary to open camera during online class?");
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');

        this.warning = createElement('h2', "Stay Home, Stay Safe");
        this.button = createButton('Submit');
    }


    display() {
        this.title.position(200, 5);

        this.input1.position(670, 165);
        this.input2.position(670, 265);       
        
        this.question1.position(500, 360);
        this.radio.position(600, 420);
        this.question2.position(500, 450);
        this.radio1.position(600, 510);
        this.question3.position(500, 540);
        this.radio2.position(600, 600);

        this.warning.position(600, 625);
        this.button.position(700, 700);

        this.button.mousePressed(() => {
            voter.input = this.input.value();
            voter.email = this.email.value();
            voterCount += 1;
            voter.index = voterCount;
            voter.update();
            voter.updateCount(voterCount);
        });

    }
}