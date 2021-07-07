function quadratic_root(a, b, c) {

    let delta = b * b - 4 * a * c;
    let soln = [];
    console.log(`discriminant is ${delta}`)

    if (delta >= 0) {
        let x1 = (-b - delta ** (0.5)) / 2 / a;
        let x2 = (-b + delta ** (0.5)) / 2 / a;
        soln = [x1, x2];
        console.log(soln);
    }

    return soln;
}

console.log(quadratic_root(2, -2, -24))