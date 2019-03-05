/**
 * Interface for JSON deserialisation
 * @export
 * @interface Deserializable
 */
export interface Deserializable {
  deserialize(input: any): this;
}
