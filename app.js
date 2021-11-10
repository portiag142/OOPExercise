const Mulan = {
    title: 'Mulan',
    main: 'Fa Mulan',
    quote: function(){
        
       return`Dishonor! Dishonor on your whole family!`;}
    storyline: (){
        return `The movie ${this.title} is about ${this.main}.`
    }
};

const tangled = {

    title: 'tangled',
    main: 'Rapunzel',
    quote: function(){

        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
        }
    storyline: function(){

        return `The movie ${this.title} is about ${this.main}.`
    };

function disneyMovie(title, main){
     this.title = title;
     this.main = main;
     disneyMovie.prototype.storyline = function () {
        return `The movie ${this.title} is about ${this.main}.`
     }

}

const mulan1 = new disneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
const tangled1 = new disneyMovie(`Tangled`, `Rapunzel`);

    

};


class DM{
    constructor(title,main) {
        this.title = title;
        this.main = main;

    }
    storyline() {
        return `The movie ${this.title} is about ${this.main}.`
    }
    static loveDisneyMovies() {
        return `I Love Disney Movies!`;
    }
}
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
const tangled2 = new DM(`Tangled`, `Rapunzel`)
console.log(DM.loveDisneyMovies());

// 5
class DMCast extends DM {
    constructor(title, main, cast) {
        super(title, main);
        this.cast = cast;
    }
}
const mulan3 = new DMCast(`Mulan`, `Fa Mulan`,
    {
        mulan: `Ming-na Wen`,
        mushu: `Eddie Murphy`,
        shang: `BD Wong`,
        theEmperor: `Pat Morita`
    });
    console.log(mulan3);
const tangled3 = new DMCast(`Tangled`, `Rapunzel`,
    {
        rapunzel: `Mandy Moore`,
        flynnRider: `Zachary Levi`,
        motherGothel: `Donna Murphy`
    }
);
console.log(tangled3);
};