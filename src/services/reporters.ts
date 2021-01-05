export function booleanReporter(
    summary: string,
    passed: boolean
): void {
    console.log(
        [summary, "->", passed ? "Passed" : "Failed"].join(" ")
    );
}
