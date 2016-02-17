"use strict";

class PlayerStats {

    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.score = 0;
        this.highScore = 0;
        //this.kills = 0;
        //this.deaths = 0;
        //this.maxLength = 0;
    }
    
    changeName(newName) {
        this.name = newName;
    }
    
    increaseScore(playerId) {
        this.score++;
        if(this.score > this.highScore) {
            this.highScore = this.score;
        }
    }
    
    resetScore() {
        this.score = 0;
    }
    
    toJSON() {
        return {
            name: this.name,
            color: this.color,
            score: this.score,
            highScore: this.highScore
        };
    }
}

module.exports = PlayerStats;     