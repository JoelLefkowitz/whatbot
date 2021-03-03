export interface Message {
  text: string;
  fromMe: boolean;
  remoteJid: string;
  timestamp: Date;
}

export interface LazyCondition {
  label: string;
  condition: () => boolean;
}

export interface InletFeedback {
  latest: Message;
  permit: boolean;
}

export interface Response {
  text: string;
  recipientJid: string;
}
