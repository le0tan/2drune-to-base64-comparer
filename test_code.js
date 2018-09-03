function test_function(){
    function s_generator(pt) {
        const x = x_of(pt);
        const y = y_of(pt);
        function helper(t){
            if(t <= 1/2){
                const term1 = (t * 2 * (3 / 4));
                return make_point(math_cos(2 * math_PI * term1),
                                  math_sin(2 * math_PI * term1) + 1);
            } else {
                const term2 = -(t * 2 * (3 / 4));
                return make_point(math_cos(2 * math_PI * term2),
                                  math_sin(2 * math_PI * term2) - 1);
            }
        }
        return helper;
    }
    
    return (draw_connected_squeezed_to_window(200))(s_generator(make_point(0.5, 0.25)));
}

function target_function(){
    function s_generator(pt) {
        return t => t <= 0.5
                    ? make_point(math_sin(0.5 * math_PI - 3 * math_PI * t) + x_of(pt),
                                 math_cos(0.5 * math_PI - 3 * math_PI * t) + y_of(pt) + 1)
                    : make_point(math_sin(3 * math_PI * (t - 0.5)) + x_of(pt),
                                 math_cos(3 * math_PI * (t - 0.5)) + y_of(pt) - 1);
    }
    
    // Test
    return (draw_connected_squeezed_to_window(200))(s_generator(make_point(0.5, 0.25)));       
}