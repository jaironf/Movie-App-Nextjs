import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="md:container mx-auto pt-5">
      <div >
        <p>Aquí va la categoria de peli</p>
        </div>
     <div className="md:grid md:grid-cols-4 gap-5 pt-5 mb-10">
      {/* Truco para ver como renderiza cuando hay varias cards */}
      {[... new Array(12)].map(x =>  <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={700}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Nombre de peli</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Ver
        </Button>
      </CardFooter>
    </Card>)}
     </div>
    </main>
  );
}
