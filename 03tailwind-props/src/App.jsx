import Cards from "./components/Cards";

export default function App() {
  return (
    <>
    <h1 class="text-3xl font-bold underline text-center">Tailwind Props</h1>
    <Cards username = "Ankit" btnText = "View Profile"/>
    <Cards username = "Soni" btnText = "View Portfolio"/>
    <Cards username = "Kumar"/>
    </>
  )
}