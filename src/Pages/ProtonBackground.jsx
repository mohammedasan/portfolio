
// import React from "react";
// import Proton from "proton-engine";
// import RAFManager from "raf-manager";
// import Canvas from "./Canvas"; // Assuming you have the Canvas component for Proton rendering

// export default class ProtonBackground extends React.Component {
//   constructor(props) {
//     super(props);

//     this.colors = [
//       "#74b9ff", "#e84393", "#6c5ce7", "#00b894", "#fdcb6e", "#006266", "#1B1464"
//     ];

//     this.renderProton = this.renderProton.bind(this);
//   }

//   componentWillUnmount() {
//     try {
//       RAFManager.remove(this.renderProton);
//       this.proton.destroy();
//     } catch (e) {}
//   }

//   onCanvasInited(canvas, width, height) {
//     this.createProton(canvas, width, height);
//     RAFManager.add(this.renderProton);
//   }

//   onResize(width, height) {
//     this.crossZoneBehaviour.zone.width = width;
//     this.crossZoneBehaviour.zone.height = height;
//     this.proton.renderers[0].resize(width, height);
//   }

//   createProton(canvas, width, height) {
//     this.proton = new Proton();
//     const emitter = new Proton.Emitter();
    
//     // Decrease the rate for slower emission
//     emitter.rate = new Proton.Rate(this.props.num || 10); // Change 20 to 10 for fewer particles per second
//     emitter.damping = 0.008;

//     emitter.addInitialize(new Proton.Mass(1));
//     emitter.addInitialize(new Proton.Radius(30, 600));

//     // Slow down the particle velocity
//     emitter.addInitialize(
//       new Proton.Velocity(new Proton.Span(0.2), new Proton.Span(0, 360), "polar") // Changed from 0.5 to 0.2
//     );

//     emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, canvas.width, canvas.height)));

//     const crossZoneBehaviour = new Proton.CrossZone(new Proton.RectZone(0, 0, canvas.width, canvas.height), "cross");
//     emitter.addBehaviour(crossZoneBehaviour);
//     emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.35, 0.55)));
//     emitter.addBehaviour(new Proton.Color(this.colors));
    
//     // You can also slow down the drift if needed
//     emitter.addBehaviour(new Proton.RandomDrift(25, 25, 0.5)); // Reduced from 50 to 25

//     emitter.emit("once");
//     this.proton.addEmitter(emitter);

//     const renderer = new Proton.CanvasRenderer(canvas);
//     this.proton.addRenderer(renderer);

//     this.crossZoneBehaviour = crossZoneBehaviour;
//   }

//   renderProton() {
//     this.proton && this.proton.update();
//   }

//   render() {
//     return (
//       <Canvas
//         bg={this.props.bg}
//         globalCompositeOperation="darken"
//         onCanvasInited={this.onCanvasInited.bind(this)}
//         onResize={this.onResize.bind(this)}
//       />
//     );
//   }
// }
import React from "react";
import Proton from "proton-engine";
import RAFManager from "raf-manager";
import Canvas from "./Canvas"; // Assuming you have the Canvas component for Proton rendering

export default class ProtonBackground extends React.Component {
  constructor(props) {
    super(props);

    this.colors = [
      "#bdc3c7", // Light gray to match your gradient background
      "#ffffff", // White
      "#dfe6e9", // Light color for better visibility
      "#2c3e50", // Darker color from your gradient
      "#e84393", // Retain some color contrast
      "#00b894", // Retain some color contrast
    ];

    this.renderProton = this.renderProton.bind(this);
  }

  componentWillUnmount() {
    try {
      RAFManager.remove(this.renderProton);
      this.proton.destroy();
    } catch (e) {}
  }

  onCanvasInited(canvas, width, height) {
    this.createProton(canvas, width, height);
    RAFManager.add(this.renderProton);
  }

  onResize(width, height) {
    this.crossZoneBehaviour.zone.width = width;
    this.crossZoneBehaviour.zone.height = height;
    this.proton.renderers[0].resize(width, height);
  }

  createProton(canvas, width, height) {
    this.proton = new Proton();
    const emitter = new Proton.Emitter();
    
    // Decrease the rate for slower emission
    emitter.rate = new Proton.Rate(this.props.num || 10); // Change 20 to 10 for fewer particles per second
    emitter.damping = 0.008;

    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(30, 600));

    // Slow down the particle velocity
    emitter.addInitialize(
      new Proton.Velocity(new Proton.Span(0.2), new Proton.Span(0, 360), "polar") // Changed from 0.5 to 0.2
    );

    emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, canvas.width, canvas.height)));

    const crossZoneBehaviour = new Proton.CrossZone(new Proton.RectZone(0, 0, canvas.width, canvas.height), "cross");
    emitter.addBehaviour(crossZoneBehaviour);
    
    // Adjusting the alpha for transparency
    emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.1, 0.3))); // Reduced from 0.35-0.55 to 0.1-0.3 for more transparency
    emitter.addBehaviour(new Proton.Color(this.colors));
    
    // You can also slow down the drift if needed
    emitter.addBehaviour(new Proton.RandomDrift(25, 25, 0.5)); // Reduced from 50 to 25

    emitter.emit("once");
    this.proton.addEmitter(emitter);

    const renderer = new Proton.CanvasRenderer(canvas);
    this.proton.addRenderer(renderer);

    this.crossZoneBehaviour = crossZoneBehaviour;
  }

  renderProton() {
    this.proton && this.proton.update();
  }

  render() {
    return (
      <Canvas
        bg={this.props.bg}
        globalCompositeOperation="darken"
        onCanvasInited={this.onCanvasInited.bind(this)}
        onResize={this.onResize.bind(this)}
      />
    );
  }
}
