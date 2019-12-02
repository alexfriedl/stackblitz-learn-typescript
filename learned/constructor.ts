/**
 * Variant A
 *
 * APIService with lots of repetition
 */
export class APIServiceOverload {
  private _authToken: string;
  constructor(token: string) {
    this._authToken = token;
  }
}

/**
 * Variant B
 *
 * Exact same APIService as above
 */
export class APIService {
  constructor(private _authToken: string) {}
}
