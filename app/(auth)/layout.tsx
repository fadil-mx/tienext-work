export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      <main className=''>{children}</main>
    </div>
  )
}
