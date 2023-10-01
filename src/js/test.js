// const calDep = (arr, depth =1) => {
//     let result = depth;

//     for (let elem of arr) {
//         if (Array.isArray(elem)) {
//             result = calDep(elem, depth +1);
//         }
//     }

//     return result;
// };

// console.log(calDep([1, 2, [3, 4, [5]]]));


// console.log(calDep([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));

// const calDep = (arr, depth =1) => {
//     let result = depth;

//     for (let elem of arr) {
//         if (Array.isArray(elem)) {
//             const current = calDep(elem, depth +1);
//             console.log(elem, depth);
//             result = current > result ? current : result;
//             // console.log(result);
//         }
//     }

//     return result;
// };

// console.log(calDep([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));