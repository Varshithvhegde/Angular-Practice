export interface Pokemon {
    id : number,
    name : String,
    type :String ,
    isCool :boolean,
    acceptTerms: boolean;
}

export interface PokemonType{
    key :number,
    value :String
}