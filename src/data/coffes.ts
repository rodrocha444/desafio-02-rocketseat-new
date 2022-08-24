type tags = 'tradicional' | 'com leite' | 'especial' | 'alcoólico' | 'gelado';

export interface CoffeProps {
  id: number
  imgSrc: string
  tags: tags[]
  title: string
  description: string
}

const coffes: CoffeProps[] = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imgSrc: "/src/assets/coffes-imgs/Expresso.png",
    tags:["tradicional"]
  },
  {
    id: 2,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    imgSrc: "/src/assets/coffes-imgs/Americano.png",
    tags:["tradicional"]
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    imgSrc: "/src/assets/coffes-imgs/Expresso Cremoso.png",
    tags:["tradicional"]
  },
  {
    id: 4,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgSrc: "/src/assets/coffes-imgs/Café Gelado.png",
    tags:["tradicional", "gelado"]
  },
  {
    id: 5,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    imgSrc: "/src/assets/coffes-imgs/Café com Leite.png",
    tags:["tradicional", "com leite"]
  },
  {
    id: 6,
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imgSrc: "/src/assets/coffes-imgs/Latte.png",
    tags:["tradicional", "com leite"]
  },
  
]

export default coffes