class Poker_table {
    constructor() {
        this.colour = 'green';
        this.card_count = 2;
    }
}
class TableBuilder {
    constructor() {
        this.table = new Poker_table();
    }
    setColour(col) {
        this.table.colour = col;
    }
    setSize(s) {
        this.table.size = s;
    }
    setBlind(blind) {
        this.table.big_blind = blind;
    }
    setCard(c) {
        this.table.card_count = c;
    }
    getProduct() {
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
//# sourceMappingURL=app.js.map