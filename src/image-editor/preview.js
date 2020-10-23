import React from "react";
import "../styles.css";

import { fabric } from "fabric";

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designs: props.designs,
    };
  }

  componentDidMount() {
    this.initCanvas(this.state.designs);
  }

  redrawCanvas(designs) {
    this.canvas.dispose();
    this.initCanvas(designs);
  }

  initCanvas(designs) {
    this.canvas = new fabric.Canvas("my-fabric-canvas");

    designs.forEach((element) => {
      if (element.type === "rect") {
        const rect = new fabric.Rect({
          width: 50,
          height: 50,
          fill: "blue",
          angle: 0,
          top: 0,
          left: 0,
        });

        this.canvas.add(rect);
      } else if (element.type === "image") {
        fabric.Image.fromURL("https://http.cat/100", (img) => {
          img.scale(0.2);
          this.canvas.add(img);
        });
      } else if (element.type === "text") {
        const textbox = new fabric.Textbox(
          "Click on the Rectangle to move it.",
          {
            fontSize: 20,
            left: 50,
            top: 0,
            width: 200,
          }
        );
        this.canvas.add(textbox);
      }
    });
    // UseEffect's cleanup function
    return () => {
      this.canvas.dispose();
    };
  }

  render() {
    return (
      <div id="preview">
        <canvas id="my-fabric-canvas" width="500" height="500" />
      </div>
    );
  }
}
