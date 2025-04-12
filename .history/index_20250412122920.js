const two_crystal_balls = function(breaks) {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;
    
    // First loop - jump by sqrt(n)
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    
    // Go back to the previous jump point
    i -= jmpAmount;
    
    // Second loop - linear search from previous jump
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    
    return -1;
}

console.log(two_crystal_balls([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));