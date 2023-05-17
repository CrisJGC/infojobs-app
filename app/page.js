import Info from "../components/info"

export default async function Home() {
  const infojobs = await Info()
  console.log(infojobs )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Testing infojobs app</p>
      <p>Escribiending more testing</p>
      
    </main>
  )
}
