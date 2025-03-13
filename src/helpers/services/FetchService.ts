export class FetchService {
  static eId = "148706";
  static urlFirstPart = `http://185.244.172.108:8081/v1/outlay-rows/entity/${this.eId}/row/`;

  static async getList() {
    const url = `${this.urlFirstPart}list`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
}
