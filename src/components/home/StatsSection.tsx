interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="p-6">
      <div className="text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <StatCard number="1000+" label="Scholarly Articles" />
          <StatCard number="500+" label="Video Lectures" />
          <StatCard number="50+" label="Expert Scholars" />
          <StatCard number="100K+" label="Active Users" />
        </div>
      </div>
    </section>
  );
};