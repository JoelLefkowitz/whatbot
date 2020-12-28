export interface LazyCondition {
  label: string;
  condition: () => boolean;
}

export const notFromMe = (message: Message): ResponseCondition => ({
  label: "Not from me",
  condition: (): boolean => !message.fromMe,
});

export const fromSingle = (message: Message): ResponseCondition => ({
  label: "From single person",
  condition: (): boolean => isSingleId(message.id),
});

export const notWhitelisted = (
  message: Message,
  whitelist: string[]
): ResponseCondition => ({
  label: "Not whitelisted",
  condition: (): boolean => !whitelist.includes(message.id),
});

// const latestReply = messages.find(
//   (message: WAMessage) => parseMessage(message).fromMe
// );

// typeof latestReply !== "undefined",
// hoursSince(parseMessage(latestReply).timestamp) > 1,
