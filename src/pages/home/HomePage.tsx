import PokemonCard from "@/components/PokemonCard";
import { usePokemonList } from "../../hooks/usePokemonList";

export default function HomePage() {
  const { data, loading, error } = usePokemonList(20);

  if (loading) {
    return <div style={{ padding: 24 }}>불러오는 중...</div>;
  }

  if (error) {
    return <div style={{ padding: 24 }}>{error}</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>포켓몬 도감</h1>

      <div style={{ display: "grid", gap: 12 }}>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
}
