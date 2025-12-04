const data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(dataset) {
        if (!dataset || dataset.length === 0)
            throw new Error("Dataset cannot be empty!");
        this.data = dataset;
    }

    getActiveUsers() {
        return this.data.filter(u => u.steps > 7000);
    }

    getAverageCalories() {
        return this.data.reduce((sum, u) => sum + u.calories, 0) / this.data.length;
    }

    getUserSummary() {
        return this.data.map(u => `${u.user} burned ${u.calories} calories`);
    }
}

try {
    let fa = new FitnessAnalytics(data);

    console.log("Active Users:", fa.getActiveUsers());
    console.log("Avg Calories:", fa.getAverageCalories());
    console.log("Summary:", fa.getUserSummary());

} catch (err) {
    console.log("Error:", err.message);
}
