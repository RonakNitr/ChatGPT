
import './App.css';
import gptLOGO from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      
     <div className="sideBar">
      <div className='upperSide'>
        <div className='upperSideTop'><img src={gptLOGO} alt='logo' className='logo'/><span className='brand'>ChatGPT</span></div>
        <button className='midBtn'><img src={addBtn} alt='Newchat' className='addBtn'/>New Chat</button>
        <div class="upperSideBottom">
          <button class="query"><img src={msgIcon} alt="query" />What is Programming ?</button>
          <button class="query"><img src={msgIcon} alt="query" />How to use an API ?</button>
        </div>
      </div>

      <div className='lowerSide'>
        <div class="listItem"><img src={home} alt="home" className='listItemImg'/>Home</div>
        <div class="listItem"><img src={saved} alt="saved" className='listItemImg'/>Saved</div>
        <div class="listItem"><img src={rocket} alt="rocket" className='listItemImg'/>Upgrade to Pro</div>
      </div>
     </div>

     <div className='main'>

     </div>
    </div>
  );
}

export default App;
