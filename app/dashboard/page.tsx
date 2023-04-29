import Image from "next/image";

async function getData() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/2"
  );
  return response.json();
}

async function Dashboard() {
  const data = await getData();
  return (
    <div>
      <Image width="200" height="200" src={data.image} alt="Morty" />
    </div>
  );
}

export default Dashboard;
