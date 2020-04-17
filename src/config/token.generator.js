class TokenGenerator {
  initialize(generator) {
    this.get = generator;
  }

  get(scopes) {
    throw new Error("Token generator was not initialized");
  }
}

export default new TokenGenerator();
