const obtainFilter = (input: string) => {
    const patterns = input.split(' ');
    return (value: string) =>
        patterns.reduce(
            (currentResult, pattern) =>
                currentResult && new RegExp(pattern, 'i').test(value),
            true
        );
};

export default obtainFilter;
