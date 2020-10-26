import React from "react";
import { Stage, Layer, Image, Text } from "react-konva";

export default class FrameDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designs: props.designs,
    };
  }

  render() {
    const items = this.state.designs.map((item) => {
      if (item.type === "text") {
        return <Text text={item.text || "Some text on canvas"} fontSize={15} draggable />;
      } else {
        const image = new window.Image();
        image.src = item.src || "https://www.lemark.co.uk/wp-content/uploads/Your-Image-Here-1.jpg";
        return (
          <Image
            draggable
            x={item.x}
            y={item.y}
            width={200}
            height={200}
            image={image}
          />
        );
      }
    });
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>{items}</Layer>
      </Stage>
    );
  }
}
