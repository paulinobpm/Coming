import FloatingLogos from "@/components/FloatingLogos";
import CeyeLogo from "@/components/CeyeLogo";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingLogos />

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(192 85% 55% / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        {/* Main Logo */}
        <div style={{ animation: "fade-up 0.8s ease-out both", fontSize: "4rem" }} className="mb-12">
          <CeyeLogo />
        </div>

        {/* Title */}
        <h1
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-center"
          style={{ animation: "fade-up 0.8s ease-out 0.15s both" }}
        >
          Coming <span className="text-gradient">Soon</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-lg text-center mb-3 font-body"
          style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
        >
          We are building something big, for your eye to Ceye.
        </p>

      </main>
    </div>
  );
};

export default Index;
