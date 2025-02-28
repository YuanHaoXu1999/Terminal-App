export interface Guild {
    id: string;
    name: string;
    guildMaster: string;
    guildEmblemUrl: string;
    foundedYear: number;
    motto: string;
  }
  
  export interface Character {
    id: string;
    name: string;
    description: string;
    age: number;
    isActive: boolean;
    birthDate: string;
    imageUrl: string;
    rarity: string;
    abilities: string[];
    element: string;
    guildAffiliation: Guild;
  }
  
  export interface RecordLabel {
    id: string;
    name: string;
    labelLogoUrl: string;
    foundedYear: number;
    founder: string;
    headquarters: string;
  }
  
  export interface Artist {
    id: string;
    name: string;
    description: string;
    age: number;
    isActive: boolean;
    birthDate: string;
    imageUrl: string;
    genre: string;
    instruments: string[];
    recordLabel: RecordLabel;
  }
  
  export type CharactersArray = Character[];
  export type ArtistsArray = Artist[];
  export type GuildsArray = Guild[];
  export type RecordLabelsArray = RecordLabel[];
  