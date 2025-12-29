import { useEffect, useState } from "react";

export type Pokemon = {
  id: number;
  name: string; // 영어 (내부용)
  koreanName: string; // ⭐ 한국어 이름
  image: string;
  types: string[];
};

export function usePokemonList(limit = 20) {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );
        const json = await res.json();

        const detail = await Promise.all(
          json.results.map(async (p: any) => {
            const d = await fetch(p.url).then((r) => r.json());

            // ⭐ species API (한국어 이름)
            const species = await fetch(d.species.url).then((r) => r.json());
            const koreanName =
              species.names.find((n: any) => n.language.name === "ko")?.name ??
              d.name;

            return {
              id: d.id,
              name: d.name,
              koreanName,
              image: d.sprites.front_default,
              types: d.types.map((t: any) => t.type.name),
            } as Pokemon;
          })
        );

        setData(detail);
      } catch (e) {
        setError("포켓몬 데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [limit]);

  return { data, loading, error };
}
