pragma circom 2.0.0;

include "circomlib/circuits/comparators.circom";

template AgeOver18() {
    // Private input: user's DOB as a Unix timestamp
    signal input dobTimestamp;

    // Public input: current time as Unix timestamp
    signal input currentTimestamp;

    // Output: isOver = 1 if age >= 18, otherwise 0
    signal output isOver;

    signal ageInSeconds;
    ageInSeconds <== currentTimestamp - dobTimestamp;

    // 18 years in seconds
    component cmp = GreaterThan(32); // explicitly declare 32 bits
    cmp.in[0] <== ageInSeconds;
    cmp.in[1] <== 568036800;

    isOver <== cmp.out;
}

component main = AgeOver18();
