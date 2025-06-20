import Image from "next/image";
import WalletConnect from './WalletConnect';

type HeaderProps = {
  hasOpenAssignments?: boolean;
  onOpenAssignmentsClick?: () => void;
};

export default function Header({hasOpenAssignments, onOpenAssignmentsClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6 px-4">
      <Image
        src="/logo.png"
        alt="Logo"
        width={60}
        height={60}
        className="w-[60px] h-[60px]"
        priority
      />
      <div className="flex items-center gap-4">
        {hasOpenAssignments && (
          <button
            className="ml-2 px-6 py-2 bg-[#cc3d3d] text-white rounded font-retro text-xs animate-pulse"
            onClick={onOpenAssignmentsClick}
          >
            Open Tasks!
          </button>
        )}
        <WalletConnect />
      </div>
    </header>
  );
}