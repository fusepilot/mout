define(['./lerp', './clamp'], function(lerp, clamp){
    function norm(val, min, max) {
        val = clamp(val, min, max);
        return val === max ? 1 : (val - min) / (max - min);
    };
    
    /**
    * Maps a number from one scale to another.
    * @example map(3, 0, 4, -1, 1) -> 0.5
    */
    function map(val, min1, max1, min2, max2){
        return lerp( norm(val, min1, max1), min2, max2 );
    }
    return map;
});
