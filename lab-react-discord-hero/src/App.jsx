import Button from "./components/button/button.jsx";
import Menu from "./components/menu/menu.jsx";
import Logo from "./components/logo/logo.jsx";
import Title from "./components/title/title.jsx";
import Paragraph from "./components/paragraph/paragraph.jsx";
import backgroundImg from "./assets/discord-background.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <Menu />
      </div>
      <section className="intro-text">
        <Title text="Imagine a place ..."></Title>
        <Paragraph text="...where you can belong to a school club, a gaming group, 
        or a worldwide art community. 
        Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often."></Paragraph>
        <Button type="download" text="Download for Mac" />
        <Button type="browser" text="Open discord in your browser" />
      </section>
      <img
        src={backgroundImg}
        className="backgroundImg"
        alt="characters "
      ></img>
    </div>
  );
}

export default App;
