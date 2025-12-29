type Props = {
  id: number;
  name: string;
  koreanName: string;
  image: string;
  types: string[];
};

export default function PokemonCard({
  id,
  name,
  koreanName,
  image,
  types,
}: Props) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 16,
        background: "#f4f6f8",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <img src={image} alt={name} width={56} height={56} />

      <div>
        <div style={{ fontSize: 12, opacity: 0.5 }}>No.{id}</div>
        <div style={{ fontSize: 20, fontWeight: 800 }}>{koreanName}</div>
        <div style={{ fontSize: 12, opacity: 0.4 }}>{name}</div>

        <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
          {types.map((t) => (
            <span
              key={t}
              style={{
                background: "#e5e7eb",
                padding: "4px 10px",
                borderRadius: 999,
                fontSize: 12,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
