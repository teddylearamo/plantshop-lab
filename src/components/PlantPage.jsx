import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search onSearchChange={handleSearchChange} />

      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;