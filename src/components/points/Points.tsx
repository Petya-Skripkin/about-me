export default function Points({ count = 24 }: { count?: number }) {
  const points: number[] = [];
  for (let i = 0; i < count; i++) {
    points.push(i);
  }
  return (
    <div className="flex flex-wrap justify-end">
      {points.map((el) => {
        const m = Math.floor(Math.random() * 10) + 20 + "px";
        return (
          <div
            key={el}
            className="w-[20px] h-[20px] rounded-full bg-[#242A39] mt-[20px]"
            style={{ marginLeft: m }}
          />
        );
      })}
    </div>
  );
}
