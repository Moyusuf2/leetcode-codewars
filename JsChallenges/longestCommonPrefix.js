var longestCommonPrefix = function(strs) {
    if(!strs[0]){
        return '';
    }
let commonPrefix = ''; 
let currentPrefix = '';

for(let i = 0; i < strs[0].length; i++){
    currentPrefix += strs[0][i];
        for(let j = 0; j < strs.length; j++){
            if(!strs[j].startsWith(currentPrefix)){
                return commonPrefix;
            }
        }
        commonPrefix = currentPrefix;
    }
    return currentPrefix;
};