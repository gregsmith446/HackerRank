// HackerRank Apple + Orange
// How much fruit falls on Sam's house?

// INPUT
// 5 lines of input
// 2 ints (s & t)
// 2 ints (a & b)
// 2 ints (m & n)
// m space sep ints (int array) denoting the distances apple falls from point a
// n space sep ints (int array) denoting distances each orange falls from point b

// parameters
// s: int, starting point of Sam's house location.
// t: int, ending location of Sam's house location.
// a: int, location of the Apple tree.
// b: int, location of the Orange tree.
// apples: int arr, distances at which each apple falls from the tree.
// oranges: int arr, distances at which each orange falls from the tree

// SAMPLE input
// 7 11, start + end points of the house
// 5 15, location of apple tree (5) & orange (15)
// 3 2, vaules of m(3) + n(2), the # of each fruit that falls
// -2 2 1, distances of apple(s) falling from tree [not from house]
// 5 -6, distance of orange(s) falling from tree [not from house]

//house location
// s = 7
// t = 11
//tree locations
// a = 5
// b = 15
// distances of apple/orange falling from tree
// m = 3
// n = 2

// OUTPUT
// 2 ints on different lines
// int #1 = # of apples that fall on house
// int #2 = # of oranges that fall on house

// you are calculating the # of pieces of fruit that fall on Sam's house

// SAMPLE output
// 1 (apple)
// 1 (orange)
// Each on separeate line


// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {


}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}