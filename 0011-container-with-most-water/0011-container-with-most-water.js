/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let left = 0;
    let rigth = (height.length - 1);
    let res = 0;
    
    if(height.length < 2 || height.length > 10**5) {
        return 0;
    }
    
    while(left < rigth) {
        if(height[left] < 0 || height[left] > (10**4) || height[rigth] < 0 || height[rigth] > (10**4)){
            return 0;
            }
        
        area = (rigth - left) * Math.min(height[left], height[rigth])
        res = Math.max(res, area);
        
        if(height[left] < height[rigth]) {
            left +=1;
        }
        else {
            rigth -=1;
        }
    }
    return res;
};




