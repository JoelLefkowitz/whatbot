export async function chatListener(chatUpdate: ChatUpdate): Promise<void> {
  if (chatUpdate.messages) {
    const recentMessages = await chatInlet(conn, chatUpdate, 5);
    const response = memorylessResponse(recentMessages, whitelist);

    if (response.permit()) {
      conn.sendMessage(response.recipientId, response.text(), MessageType.text);
    }
  }
}
