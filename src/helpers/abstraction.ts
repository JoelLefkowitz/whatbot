export interface ChatUpdate {
  messages: {
    all: () => WAMessage[];
  };
}

export interface WAMessage {
  message: { conversation: string };
  key: {
    remoteJid: string;
    fromMe: boolean;
  };
  messageTimestamp: {
    low: number;
  };
}

export interface Message {
  id: string;
  text: string;
  fromMe: boolean;
  timestamp: Date;
}
