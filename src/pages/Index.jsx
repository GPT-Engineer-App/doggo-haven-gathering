import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pawsome Pals</h1>
        <p className="text-xl text-gray-600">Discover the joy of canine companionship</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Popular Dog Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Labrador Retriever", "German Shepherd", "Golden Retriever"].map((breed) => (
            <Card key={breed}>
              <CardHeader>
                <CardTitle>{breed}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4">
                  <img src="/placeholder.svg" alt={breed} className="mx-auto object-cover w-full h-48" />
                </div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Why Own a Dog?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Companionship", description: "Dogs provide unconditional love and loyalty." },
            { title: "Health Benefits", icon: <Heart className="h-6 w-6 mb-2" />, description: "Owning a dog can reduce stress and improve your health." },
            { title: "Security", icon: <Shield className="h-6 w-6 mb-2" />, description: "Dogs can help protect your home and family." },
          ].map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {benefit.icon}
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Meet Your New Best Friend?</h2>
        <p className="text-xl text-gray-600 mb-8">Visit your local shelter and give a loving home to a dog in need.</p>
        <Button size="lg">Find a Shelter Near You</Button>
      </section>
    </div>
  );
};

export default Index;
