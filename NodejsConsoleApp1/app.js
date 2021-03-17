class abstract_Poker_table {
    constructor(builder) {
        this.size = builder.size
        this.colour = builder.colour 
        this.blind = builder.blind || false
    }
}

class Omaha extends abstract_Poker_table {
    constructor(builder) {
        super(builder)
        this.cardsM = builder.cards
    }
}

class Holdem extends abstract_Poker_table {
    constructor(builder) {
        super(builder)
        this.cards = builder.cards
    }
}

class PokerBuilder {
    constructor(size) {
        this.size = size
    }
    addColour(col) {
        this.colour = col
        return this
    }

    addBlind() {
        this.blind = true
        return this
    }
}


class PokerHoldemBuilder extends PokerBuilder{ 
    constructor(size) {
        super(size)
    }

    setCards(card) {
        this.colour = this.cards
        return this
    }

    build() {
        return new Holdem(this)
    }
}

class PokerOmahaBuilder extends PokerBuilder{
    constructor(size) {
        super(size);
    }

    setCardsM(card) {
        this.colour = this.cardsM
        return this
    }

    build() {
        return new Omaha(this)
    }
}

const Table_Omaha = (new PokerOmahaBuilder(6))
    .addColour('green')
    .addBlind()
    .setCardsM('4')
    .build()

console.log(Table_Omaha)

const Table_Holdem = (new PokerHoldemBuilder(9))
    .addColour('black')
    .addBlind()
    .setCards('2')
    .build()

console.log(Table_Holdem)