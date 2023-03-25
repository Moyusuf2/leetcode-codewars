function firstRecurringCharacter(input) {
    let freq = {};
    for(let i = 0; i < input.length; i++){
      if(freq[input[i]]) {
        return input[i]; // Return the first recurring character
      }
      freq[input[i]] = 1; // Set the frequency of the current element to 1
    }
    return null; // Return null if no recurring character found
  }