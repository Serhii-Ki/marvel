type Url = {
  type: string;
  url: string;
};

type Image = {
  path: string;
  extension: string;
};

type ComicSummary = {
  resourceURI: string;
  name: string;
};

type ComicList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
};

type StorySummary = {
  resourceURI: string;
  name: string;
  type: string;
};

type StoryList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
};

type EventSummary = {
  resourceURI: string;
  name: string;
};

type EventList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
};

type SeriesSummary = {
  resourceURI: string;
  name: string;
};

type SeriesList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
};

type CharacterDataContainer = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
};

export type CharacterDataWrapper = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
};