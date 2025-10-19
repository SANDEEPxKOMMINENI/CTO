export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-between text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="font-medium">Next Starter</span>
        </p>
        <p>
          Built with <a className="underline hover:text-foreground" href="https://nextjs.org">Next.js</a>
        </p>
      </div>
    </footer>
  )
}
