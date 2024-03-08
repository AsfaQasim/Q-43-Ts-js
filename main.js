var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the original array of magician names
var magicians = ["Usman", "Fakhar", "Zakir"];
// Function to add "the Great" to each magician's name
function makeGreat(names) {
    return names.map(function (name) { return "the Great ".concat(name); });
}
// Function to display magician names
function showMagicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
// Create a copy of the original array
var originalNames = __spreadArray([], magicians, true);
// Call makeGreat with the copy of the original array
var greatMagicians = makeGreat(__spreadArray([], originalNames, true));
// Display the original array
console.log("Original Magicians:");
showMagicians(originalNames);
// Display the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
