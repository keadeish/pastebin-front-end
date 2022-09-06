function App(): JSX.Element {
  return (
    <form className="new-paste-form">
      <input className="title-text" placeholder="Title..."></input>
      <input className="name-text" placeholder="Name..."></input>
      <input className="text-area" placeholder="Text Area..."></input>
      <button className="submit-button">SUBMIT</button>
    </form>
  );
}

export default App;
