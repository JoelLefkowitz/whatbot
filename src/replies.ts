export const getReply = (received: string): string => {
  const reply = "I am " + randomExcuse();
  console.log(received, reply);
  return reply;
};

export const randomExcuse = (): string => {
  const excuses = [
    "under water",
    "on fire",
    "eating some really good cake",
    "taking a little wee",
  ];
  return excuses[Math.floor(Math.random() * excuses.length)]; };
