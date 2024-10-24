for (let i: number = 1; i <= 10; i++) {
    let isOdd: boolean = false;
    if (i % 2 == 0) {
        isOdd = false;
    } else {
        isOdd = true;
    }
    console.log(`${i} is ${isOdd ? "odd" : "even"}`)
}