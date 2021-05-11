export interface Success {
    total: number;
}

export interface Tags {
    0: string;
    1: string;
    2: string;
    4: string;
}

export interface Quote {
    quote: string;
    length: string;
    author: string;
    tags: Tags;
    category: string;
    language: string;
    date: string;
    permalink: string;
    id: string;
    background: string;
    title: string;
}

export interface Contents {
    quotes: Quote[];
}

export interface Copyright {
    year: number;
    url: string;
}

export interface RootObject {
    success: Success;
    contents: Contents;
    baseurl: string;
    copyright: Copyright;
}