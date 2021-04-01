class Poker_table {
    public size: number;
    public colour: string = 'green';
    public big_blind: number;
    public card_count: number = 2;
}

interface Builder {
    setColour(col: string): void;
    setSize (s: number): void;
    setBlind(blind: number): void;
    setCard(c: number): void;
}

class TableBuilder implements Builder {
    private table: Poker_table;
    constructor() {
        this.table = new Poker_table();
    }
    public setColour(col: string): void {
        this.table.colour = col;
    }
    public setSize(s: number): void {
        this.table.size = s;
    }
    public setBlind(blind: number): void {
        this.table.big_blind = blind;
    }
    public setCard(c: number): void{
        this.table.card_count = c;
    }

    public getProduct(): Poker_table {
        return this.table;
    }
}

const builder = new TableBuilder();
console.log('Holdem: ');
builder.setSize(5);
builder.setBlind(5000);
console.log(builder.getProduct());
console.log('Omaha: ');
builder.setSize(9);
builder.setBlind(1000);
builder.setCard(5);
builder.setColour('black');
console.log(builder.getProduct());
