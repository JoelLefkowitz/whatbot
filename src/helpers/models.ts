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

export interface Response {
  text: string;
  recipientId: string;
}
