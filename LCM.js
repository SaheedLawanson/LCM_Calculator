function recursive(a, b) {
	if(b==a){return a}
	return recursive(a, b-1) * b
}

function smallestCommons(arr) {
 	// Sort array 
	let array = arr.sort((a,b) => a-b)

	// Find the highest common multiple
	let hcm = recursive(array[0], array[1])

	// Create a range of the HCM
	let hcmRange = []

	for (let multiple = array[1]; multiple <= hcm; multiple += array[1]) {
		hcmRange.push(multiple)
	}
  
	// Loop through all multiples of the highest array item
	for (let index in hcmRange) {
		let multiple = hcmRange[index]

		// Define variables to check success status
		// accumulator: changes only when multiple is divisible
		// counter: increases by one after every check
		let counter = 0; let accummulator = 0;

		// Check if each multiple is divisible  by all
		for (let number = array[0]; number <= array[1]; number+=1) {
      		if(number==1){continue}
			counter++

			// If the multiple is divisible by every number
      		// accummulator should be equal to counter
			if (multiple % number==0) {
				accummulator++
			}

			else {break}
		}
			if (accummulator == counter) {
        		console.log(multiple)
				return multiple
			}
	}
}

smallestCommons([1,5]);