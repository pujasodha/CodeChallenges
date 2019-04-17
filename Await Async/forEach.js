const waitFor = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
};

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

// asyncForEach([1, 2, 3], async (num) => {
//     await waitFor(1000);
//     console.log(num);
// })
// console.log('Done');


const start = async () => {
    await asyncForEach([1, 2, 3], async (num) => {
        await waitFor(1000);
        console.log(num);
    });
    console.log('Done');
}

start();