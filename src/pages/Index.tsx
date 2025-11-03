import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const jerseys = [
    {
      id: 1,
      name: "Classic Blue",
      image: "https://cdn.poehali.dev/projects/9ee84a13-9b9b-48c5-acb0-14a8f6e7b73e/files/8ca5dea5-4411-44a8-bfbe-4b153466bd0a.jpg",
      price: "₽4,999"
    },
    {
      id: 2,
      name: "Red Power",
      image: "https://cdn.poehali.dev/projects/9ee84a13-9b9b-48c5-acb0-14a8f6e7b73e/files/c827d306-ee3d-417c-a67f-b5d1de4540c5.jpg",
      price: "₽5,499"
    },
    {
      id: 3,
      name: "Rainbow Collection",
      image: "https://cdn.poehali.dev/projects/9ee84a13-9b9b-48c5-acb0-14a8f6e7b73e/files/253347e3-5503-44c5-8b35-4561ffa1c266.jpg",
      price: "₽6,999"
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Премиум Качество",
      description: "Только оригинальные материалы высочайшего качества"
    },
    {
      icon: "Zap",
      title: "Быстрая Доставка",
      description: "Доставка по всей России за 1-3 дня"
    },
    {
      icon: "Award",
      title: "Гарантия",
      description: "100% гарантия на всю продукцию"
    },
    {
      icon: "Users",
      title: "Команда Экспертов",
      description: "Профессиональная консультация по выбору"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shirt" size={32} className="text-primary" />
            <h1 className="text-2xl font-black">JERSEY PRO</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#gallery" className="hover:text-primary transition-colors font-medium">Галерея</a>
            <a href="#benefits" className="hover:text-primary transition-colors font-medium">Преимущества</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold">
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              ФУТБОЛЬНЫЕ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                ДЖЕРСИ
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Оригинальная спортивная экипировка мировых клубов
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-bold text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">ГАЛЕРЕЯ</h2>
            <p className="text-xl text-muted-foreground">Лучшие модели этого сезона</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jerseys.map((jersey, index) => (
              <Card 
                key={jersey.id} 
                className="overflow-hidden hover-scale bg-card border-2 border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={jersey.image} 
                    alt={jersey.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{jersey.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-primary">{jersey.price}</span>
                    <Button className="bg-secondary hover:bg-secondary/90 font-bold">
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">НАШИ ПРЕИМУЩЕСТВА</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover-scale bg-card border-2 border-border hover:border-secondary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                  <Icon name={benefit.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shirt" size={28} className="text-primary" />
            <span className="text-2xl font-black">JERSEY PRO</span>
          </div>
          <p className="text-muted-foreground mb-6">Лучшая футбольная экипировка 2025</p>
          <div className="flex gap-6 justify-center">
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
