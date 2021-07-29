export interface IPokemonPage {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

interface IPokemonMove {
  name: string;
  url: string;
}

interface IPokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonData {
  abilities: IPokemonAbilities[];
  moves: IPokemonMove[];
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  weight: number;
}
