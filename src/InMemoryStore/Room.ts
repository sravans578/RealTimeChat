/**
 * Interface to a chat room. A room can have multiple chats in it.
 */

import { Chat } from "./Chat";

export interface Room {
  // User Id.
  roomId: string;

  // User name.
  chats: Chat[];
}