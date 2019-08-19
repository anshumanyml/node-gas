const greeter = (person: string) => {
  return `Hello, ${person}!`;
}

function testGreeter() {
  const user = 'Anshuman';
  Logger.log(greeter(user));
}