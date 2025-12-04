class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance <= 0 || isNaN(this.distance))
            throw new Error("Invalid distance!");

        return this.distance * 12; // ₹12 per km
    }
}

try {
    let trip = new Trip("Mathura", "Agra", 50);
    console.log("Fare:", trip.calculateFare());
    
    let trip2 = new Trip("A", "B", -5); // error
    console.log(trip2.calculateFare());
}
catch (err) {
    console.log("Error:", err.message);
}
