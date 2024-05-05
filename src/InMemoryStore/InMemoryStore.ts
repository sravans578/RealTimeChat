/**
 * Implementation of a in-memory chat store.
 */

type RoomId = string;

import { AbStractInMemoryStoreForChatRooms } from "./AbstractInMemoryStoreForChatRooms";
import { Room } from "./Room";
import { Chat } from "./Chat";

export class InMemoryStore implements AbStractInMemoryStoreForChatRooms {
  // Map from room Id to Room.
  private roomIdToRoom: Map<RoomId, Room>;

  constructor() {
    this.roomIdToRoom = new Map<RoomId, Room>();
  }

  initializeChatRoom(roomId: RoomId): void {
    console.log("Initializing room with Id: " + roomId + " with empty chats.");
    this.roomIdToRoom.set(roomId, {
      roomId,
      chats: [],
    });
  }

  addChatToRoom(chat: Chat, roomId: RoomId): void {
    const room = this.roomIdToRoom.get(roomId);
    if (!room) {
      console.log(
        "Could not find a room with id: " + roomId + " to add chat " + chat
      );
      return;
    }
    room.chats.push(chat);
  }

  upVoteChat(aInRoomId: string, aInChatId: string, userId: string): void {
    // Let's try to find the chat first.
    const room = this.roomIdToRoom.get(aInRoomId);
    if (!room) {
      console.log(
        "Could not find a room with id: " +
          aInRoomId +
          " to upvote chat with Id: " +
          aInChatId
      );
      return;
    }
    const chat = room.chats.find(({ chatId }) => chatId === aInChatId);
    if (!chat) {
      console.log(
        "Could not find a chat with id: " +
          aInChatId +
          " in room with id: " +
          aInRoomId
      );
      return;
    }
    chat.UpVotedUsers.push(userId);
  }

  downVoteChat(aInRoomId: string, aInChatId: string, aInUserId: string): void {
    // Let's try to find the chat first.
    const room = this.roomIdToRoom.get(aInRoomId);
    if (!room) {
      console.log(
        "Could not find a room with id: " +
          aInRoomId +
          " to upvote chat with Id: " +
          aInChatId
      );
      return;
    }
    const chat = room.chats.find(({ chatId }) => chatId === aInChatId);
    if (!chat) {
      console.log(
        "Could not find a chat with id: " +
          aInChatId +
          " in room with id: " +
          aInRoomId
      );
      return;
    }
    chat.DownVotedUsers.push(aInUserId);
  }

  getChatRoom(roomId: RoomId) {
    const room = this.roomIdToRoom.get(roomId);
    return room;
  }

  getChats(roomId: RoomId): any {
    const room = this.roomIdToRoom.get(roomId);
    if (!room) {
      // Return an empty chat collection when we can't find a room.
      return [];
    }
    return room.chats;
  }
}
