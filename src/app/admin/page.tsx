export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7E7CE] text-[#3A2F1B] font-mono">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-lg mb-2">Welcome, admin!</p>
      <div className="bg-white rounded-xl shadow p-6 border-2 border-[#B97A57]">
        <p className="mb-2">Here you can manage quests, users, and view stats.</p>
        {/* Voeg hier je admin functionaliteit toe */}
      </div>
    </main>
  );
}