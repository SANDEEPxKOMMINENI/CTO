export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-semibold">App</div>
        <nav className="hidden gap-4 text-sm text-muted-foreground sm:flex">
          <a href="#" className="hover:text-foreground">
            Docs
          </a>
          <a href="#" className="hover:text-foreground">
            About
          </a>
        </nav>
      </div>
    </header>
  )
}
