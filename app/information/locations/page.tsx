
import Card from "@/components/card/Card";
import { getLocations } from "./services";

async function fetchLoactions() {
  return await getLocations();
}

async function Character() {
  const locations = await fetchLoactions();
  return locations.map((location) => {
    return (
      <>
        <Card key={location.id} data={location} />
      </>
    );
  });
}

export default Character;
