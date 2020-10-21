// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];
    return matrix.reduce((ac, curArr, curIndex) =>
        curIndex % 2 == 0
            ? [...ac].concat([...curArr])
            : [...ac].concat([...curArr].reverse())
    );
};
