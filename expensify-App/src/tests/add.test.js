const add = (a, b) => a + b;
const genarateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Generate Greeting', () => {
    const result = genarateGreeting('VaibhaV');
    expect(result).toBe('Hello VaibhaV!')
})

test('Generate Greeting for no name', () => {
    const result = genarateGreeting();
    expect(result).toBe('Hello Anonymous!')
})