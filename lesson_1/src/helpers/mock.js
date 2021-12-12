import { nanoid } from 'nanoid';

const createChatMock = (i) => ({
	id: nanoid(),
	name: `name ${i + 1}`,
	text: "Короткий текст сообщения...."
});

export const CHATS = Array.from({length: 10}).map((_, i) =>
createChatMock(i)
);