import SplineScene from "./SplineScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Text */}
      <div className="relative z-10">
        <h1>
          I DESIGN.
          <br />
          I BUILD.
          <br />
          I AUTOMATE.
        </h1>
      </div>

      {/* Spline */}
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>

    </section>
  );
}