let feedback = "Great product! Fast delivery and amazing sound quality!";

// word count
let words = feedback.split(" ").length;

// check negativity
let isNegative = feedback.toLowerCase().includes("bad") ||
                 feedback.toLowerCase().includes("poor");

console.log("Word Count:", words);

if (isNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
