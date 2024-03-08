
// Define the original array of magician names
const magicians: string[] = ["Usman", "Fakhar", "Zakir"];

// Function to add "the Great" to each magician's name
function makeGreat(names: string[]): string[] {
    return names.map(name => `the Great ${name}`);
}

// Function to display magician names
function showMagicians(names: string[]): void {
    names.forEach(name => console.log(name));
}

// Create a copy of the original array
const originalNames: string[] = [...magicians];

// Call makeGreat with the copy of the original array
const greatMagicians: string[] = makeGreat([...originalNames]);

// Display the original array
console.log("Original Magicians:");
showMagicians(originalNames);

// Display the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);


