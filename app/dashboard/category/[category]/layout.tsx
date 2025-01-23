export default function CategoryLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-neutral-800">
        <main>{children}</main>
      </div>
    );
  }
  