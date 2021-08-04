let getAnonymous = class{
  #name;
  #alias;
  #affiliation;

  construcor(name,alias,affiliation) {
    this.#name = name;
    this.#alias = alias;
    this.#affiliation = affiliation;
  }

  get name(){
    return this.#name;
  }

  get alias(){
    return this.#alias;
  }

  get affiliation(){
    return this.#affiliation;
  }
}
