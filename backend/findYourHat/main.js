const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

    constructor(field) {
        this.field = field;
        this.locationX = 0;
        this.locationY = 0;
        this.field[0][0] = pathCharacter;
    }

    print() {
        console.log(this.field.map(row => row.join('')).join('\n'));
    }

    askQuestion() {
        const userMove = prompt('Which way? ').toUpperCase();
        switch (userMove) {
            case 'W':
                this.locationX -= 1;
                break;
            case 'S':
                this.locationX += 1;
                break;
            case 'A':
                this.locationY -= 1;
                break;
            case 'D':
                this.locationY += 1;
                break;
            default:
                console.log('Enter W, A, S or D.');
                this.askQuestion();
                break;
        }
    }

    isOut() {
        if (this.locationX < 0 || this.locationY < 0 || this.locationX >= this.field.length || this.locationY >= this.field[0].length) {
            console.log('You went out of bounds.');
            return true;
        }
        return false;
    }

    isHole() {
        if (this.field[this.locationX][this.locationY] === hole) {
            console.log('You fell in a hole.');
            return true;
        }
        return false;
    }

    isHat() {
        if (this.field[this.locationX][this.locationY] === hat) {
            console.log('You found your hat!');
            return true;
        }
        return false;
    }

    move() {
        this.field[this.locationX][this.locationY] = pathCharacter;
    }

    playGame() {
        let playing = true;
        while (playing) {
            this.print();
            this.askQuestion();
            if (this.isOut() || this.isHole()) {
                playing = false;
                this.print();
                console.log('Game over.');
            } else if (this.isHat()) {
                playing = false;
                this.print();
                console.log('You win!');
            } else {
                this.move();
            }
        }
    }

    static generateField(height, width, percentage) {
        const field = new Array(height).fill(0).map(() => new Array(width));
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const prob = Math.random();
                field[i][j] = prob > percentage ? fieldCharacter : hole;
            }
        }
        const x = Math.floor(Math.random() * height);
        const y = Math.floor(Math.random() * width);
        field[x][y] = hat;
        return field;
    }

}

const myField = new Field(Field.generateField(10, 10, 0.2));
myField.playGame();
