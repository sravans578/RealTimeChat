import { Chat } from "./Chat";

/**
 * This is an in-memory store for chat rooms. This can hold multiple chat rooms in it.
 */
export abstract class AbStractInMemoryStoreForChatRooms {
  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Initialize a chat room.
   */
  initializeChatRoom(roomId: string) {}

  /**
   * Add a chat to a room.
   */
  addChatToRoom(chat: Chat, roomId: string) {}

  /**
   * Upvote a chat in a chat room.
   */
  upVoteChat (roomId: string, chatId: string, userId: string) {}

  /**
   * Downvote a chat in a chat room.
   */
  downVoteChat (roomId: string, chatId: string, userId: string) {}

  /**
   * Returns a chat room contained in this store identified by its room Id.
   */
  getChatRoom(roomId: string) {}

  /**
   * Returns chats from a given chat room.
   */
  getChats(room : string) {}
}
