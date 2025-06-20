import Image from "next/image";

const Header = () => (
  <header
    className="w-full py-6 flex items-center justify-between px-8 shadow"
    style={{
      background: "rgba(255,247,224,0.95)",
      boxShadow: "0 4px 24px #d2b77c55",
      borderBottom: "2px solid #d2b77c",
      fontFamily: '"Press Start 2P", "VT323", monospace',
      color: "#3a2f1b",
    }}
  >
    <div className="flex items-center">
      <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
    </div>
    <button
      className="px-4 py-2 rounded font-bold transition"
      style={{
        background: "#388e3c",
        color: "#fffbe8",
        boxShadow: "0 2px 8px #d2b77c55",
        fontFamily: '"Press Start 2P", "VT323", monospace',
      }}
    >
      Connect
    </button>
  </header>
);

export default Header;