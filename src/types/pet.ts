interface IPet {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: IBreeds[];
}

interface IBreeds {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
}
