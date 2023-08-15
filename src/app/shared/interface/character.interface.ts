export interface Character{
  id:number;
  name:string;
  image: String;
  species: string;
  gender: string;
  created: string;
  status: string;
  origin: Origin;
}

export interface Origin{
  name: string;
  url: string;
}

export interface Pages{
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
