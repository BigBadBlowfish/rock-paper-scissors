function computerPlay() {
    const choices = ["rock", "paper","scissors"];
    const choice = Math.floor(Math.random()*3);
    return choices[choice];
}