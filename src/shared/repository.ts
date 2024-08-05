export interface Repository<T> {
    findAll(): T[] | undefined // devuelve undefined o un array
    findOne(item: { id: string }): T | undefined // despues de los dos puntos es el tipo de retorno
    add(item: T): T | undefined // si no puedo agregar el elemento devuelvo undefined (lo mismo para update y delete)
    update(item: T): T | undefined
    delete(item: { id: string }): T | undefined
  }
  // esta interfaz me permite que todos mis repositorios implementen estos metodos
  // T es el objeto