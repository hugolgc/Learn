import { Api } from "../api";
import { Data } from "../interfaces/data.interface";
import { logError } from "../helpers";

export class Repository<T extends Data> extends Api {
  constructor(table: string, private constructible: (data: T) => T) {
    super(table);
  }

  @logError("Repository create()")
  async create(data: Omit<T, "id">) {
    const item = await this.http.post<T>(data);
    return this.constructible({ ...data, ...item });
  }

  @logError("Repository getAll()")
  async getAll() {
    const items = await this.http.get<T[]>();
    return items.map((item) => this.constructible(item));
  }

  @logError("Repository get()")
  async get(id: number) {
    const item = await this.http.get<T>(id);
    return this.constructible(item);
  }

  @logError("Repository update()")
  async update(data: T) {
    const item = await this.http.put<T>(data.id, data);
    return this.constructible(item);
  }

  @logError("Repository delete()")
  async delete(id: number) {
    const item = await this.http.delete<T>(id);
    return this.constructible(item);
  }
}
