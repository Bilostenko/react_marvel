class MarvelService {

  _apiBase = "https://gateway.marvel.com:443/v1/public/"
  _apiKey = "4648eb02ef921529f9d259e4cb7fd213"

  getResource = async (url)=> {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json()
  }

  getAllCharacters = () => {
    return this.getResource(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`)
  }
  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)
  }
}

export default MarvelService