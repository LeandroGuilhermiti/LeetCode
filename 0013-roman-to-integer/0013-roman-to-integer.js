/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let out = 0;
    
    if (s.length < 1 || s.length > 15) {
        return 0;
    }
    
    for(let i=0; i < s.length; i++) {
        if (!"IVXLCDM".includes(s[i])) {
            return 0;
        }
        
        if (s[i] ==  "I") {
            if (s[i+1] == "V"){
                out += 4;
                i++;
                continue;
            }
            if (s[i+1] == "X"){
                out += 9;
                i++;
                continue;
            }
            else{
                out += 1;
            }
        }
        
        else if (s[i] == "X") {
            if(s[i+1] == "L"){
                out += 40;
                i++;
                continue;
            }
            if(s[i+1] == "C"){
                out += 90;
                i++;
                continue;
            }
            else {
                out += 10;
            }
        }
        
        else if (s[i] == "C") {
            if(s[i+1] == "D"){
                out += 400;
                i++;
                continue;
            }
            if(s[i+1] == "M"){
                out += 900;
                i++;
                continue;
            }
            else {
                out += 100;
            }
        }
        
        else if (s[i] == "V") {
            out += 5;
        }
        
        else if (s[i] == "X") {
            out += 10;
        }
        
        else if (s[i] == "L") {
            out += 50;
        }
        
        else if (s[i] == "C") {
            out += 100;
        }
        
        else if (s[i] == "D") {
            out += 500;
        }
        
        else if (s[i] == "M") {
            out += 1000;
        }
    }
    return out;
};