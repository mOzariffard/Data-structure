const breaks = [];

const two_ctystal_balls = function (breaks){
       const jmpAmount= Math.floor(Math.sqrt(breaks.length));
       let i = jmpAmount;
       for(; i< breaks.length; i += jmpAmount){
        if(breaks[i]){
            break;
        }

        for(let j = 0 ; j< jmpAmount && i<breaks.length; ++j , ++i){
            if(breaks[i]){
                return i ;
            }
        }
        return -1;
       }

    
}