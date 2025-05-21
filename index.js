export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Compare Smarter: Phones, Laptops, Smartwatches & AI Tools
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Unbiased AI-powered product reviews & comparisons for smart buyers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard 
            title="Best Budget Phones"
            image="/phone.jpg"
            link="/phones"
          />
          <CategoryCard 
            title="Top Laptops for Work & Study"
            image="/laptop.jpg"
            link="/laptops"
          />
          <CategoryCard 
            title="Smartwatches Worth the Hype"
            image="/watch.jpg"
            link="/smartwatches"
          />
          <CategoryCard 
            title="Best Free AI Tools of 2025"
            image="/ai.jpg"
            link="/ai-tools"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">Powered by AI. Built for Smart Shopping.</p>
        </div>
      </div>
    </main>
  );
}

function CategoryCard({ title, image, link }) {
  return (
    <a href={link} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </a>
  );
}
