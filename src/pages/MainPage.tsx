function MainPage() {
  const mockPokemons = ["피카츄", "이상해씨", "파이리", "꼬부기"];

  return (
    <main>
      <h1>Pokémon Dex</h1>
      <p>포켓몬 목록</p>

      <ul>
        {mockPokemons.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

export default MainPage;
