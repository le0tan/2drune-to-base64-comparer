function test_function(){
    function steps(r1, r2, r3, r4){
        // your answer here
        return overlay(overlay(translate(-0.5, -0.5, scale(0.5, r4)),
                               translate(-0.5,  0.5, scale(0.5, r3))), 
                       overlay(translate( 0.5,  0.5, scale(0.5, r2)),
                               translate( 0.5, -0.5, scale(0.5, r1))));
    }
    
    // Test
    return show(steps(rcross_bb, sail_bb, corner_bb, nova_bb));
}

function target_function(){
    function place_rune(trans1, trans2, factor, rune){
        return translate(trans1, trans2,
                        scale(factor, rune));
    }
    
    function steps(r1, r2, r3, r4){
        // your answer here
       return overlay(
                  overlay(place_rune(-0.5, -0.5, 0.5, r4),
                           place_rune(-0.5, 0.5, 0.5, r3)),
                  overlay(place_rune(0.5, 0.5, 0.5, r2),
                          place_rune(0.5, -0.5, 0.5, r1))); 
    }
    
    // Test
    return show(steps(rcross_bb, sail_bb, corner_bb, nova_bb));
}