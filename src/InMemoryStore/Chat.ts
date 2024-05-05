/**
 * Interface to a chat.
 */
type UserId = string;

export interface Chat {
  // Chat Id.
  chatId: string;

  // User Id.
  userId: UserId;

  // User name.
  userName: String;

  // Message.
  message: String;

  // Users (identified by UserIds) who have upvoted this message.
  UpVotedUsers: UserId[];

  // Users (identified by UserIds) who have downvoted this message.
  DownVotedUsers: UserId[];
}
