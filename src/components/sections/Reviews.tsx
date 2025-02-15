
import { Star } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      platform: "Trustpilot",
      rating: "4.8",
      reviews: "2,394",
      logo: "https://cdn.builder.io/api/v1/image/assets/trustpilot.svg",
    },
    {
      platform: "HostAdvice",
      rating: "4.9",
      reviews: "1,829",
      logo: "https://cdn.builder.io/api/v1/image/assets/hostadvice.svg",
    },
    {
      platform: "WebHosting.Review",
      rating: "4.7",
      reviews: "956",
      logo: "https://cdn.builder.io/api/v1/image/assets/webhostingreview.svg",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-[#0E2954] mb-2">{review.platform}</h4>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-[#0E2954]">{review.rating}/5</span>
                  <span className="text-[#2D5087]">({review.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
