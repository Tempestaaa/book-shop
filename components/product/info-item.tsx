type Props = {
  label: string;
  value: React.ReactNode;
};

export default function InfoItem({ label, value }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 items-center-safe text-sm">
      <div className="font-bold">{label}</div>
      <div className="text-muted col-span-3">{value}</div>
    </div>
  );
}
