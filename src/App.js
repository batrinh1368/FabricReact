import React from "react";
import "./App.css";
import FrameDesign from "./image-editor/frame-design";
import Preview from "./image-editor/preview";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {designs: [
      {
        type: "text",
      },
      {
        type: "image",
      },
    ]}
    this.preview = React.createRef();
  }

  addText() {
    console.log("addText.");
    this.state.designs.push({
      type: "text",
    });
    this._updatePreview()
  }

  addImage() {
    console.log("addImage.");
    this.state.designs.push({
      type: "image",
    });
    this._updatePreview()
  }

  addRect() {
    console.log("addRect.");
    this.state.designs.push({
      type: "rect",
    });
    this._updatePreview()
  }

  _updatePreview(){
    // this.preview.current.redrawCanvas(this.state.designs)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        {/* <Preview designs={this.state.designs} ref={this.preview}></Preview> */}
        <FrameDesign designs={this.state.designs} ref={this.preview}></FrameDesign>
        <div>
          <button onClick={() => this.addText()}>Add Text</button>
          <button onClick={() => this.addImage()}>Add Image</button>
          <button onClick={() => this.addRect()}>Add Rect</button>
        </div>
      </div>
    );
  }
}
