const express = require("express");
const cors = require("cors");
const {default:axios} = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers:{"private-key":"9b948a1c-7cc5-47d6-8c86-e746630d349b"}}
    );
    return res.status(r.status).json(r.data);
  } 
  catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

/**


function App() {
	return (
		<ChatEngine
			projectID='00000000-0000-0000-0000-000000000000'
			userName='adam'
			userSecret='pass1234'
			// Render Custom Components
			height='100vh'
			renderChatList={(chatAppState) => {}}
			renderChatCard={(chat, index) => {}}
			renderNewChatForm={(creds) => {}}
			renderChatFeed={(chatAppState) => {}}
			renderChatHeader={(chat) => {}}
			renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
			renderIsTyping={(typers) => {}}
			renderNewMessageForm={(creds, chatId) => {}}
			renderChatSettings={(chatAppState) => {}}
			renderChatSettingsTop={(creds, chat) => {}}
			renderPeopleSettings={(creds, chat) => {}}
			renderPhotosSettings={(chat) => {}}
			renderOptionsSettings={(creds, chat) => {}}
		/>
	);
}

export default App;
 * 
 */

app.listen(3001);