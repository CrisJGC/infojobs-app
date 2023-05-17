
const infoCandidate = process.env.TOKEN_INFOJOBS 


export default async function Info() {
  const res = await fetch("https://api.infojobs.net/api/6/candidate", {
    headers: {
      'Content-Type': 'aplication/json',
      Authorization: `Basic ${infoCandidate}`
    }
  })
  const  data = await res.json()
  console.log(data)
  return data
}