import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(    
        '4ad1f9f2-487f-41fe-8ef2-f08767106aa9', 
        props.user.username,
        props.user.secret
    );

const myTheme = {
    chat: {
        message: {
                fontSize: '2rem',
                fontFamily: 'sans-serif', // Change font here
                fontWeight: '600',
          },
        },
      };
      
    return (
    <div class="chatsfont" style={{height:'100vh' }}>
        <MultiChatSocket {...chatProps}/>
        {/* <MultiChatWindow {...chatProps} style={{height:'100%'}}/> */}
        <MultiChatWindow {...chatProps} theme={myTheme}  style={{fontSize: "2px",height: '100%'}} />
    </div>
    )
}

export default ChatsPage;


/********************************************************************************** */

// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   return (
//     <div className="background">
//       <PrettyChatWindow
//         projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
//         username={props.user.username}
//         secret={props.user.secret}
//       />
//     </div>
//   );
// };

// export default ChatsPage;