export interface IEntity<Properties, PropertiesUpdate,Primitives> {
   properties: () => Properties
   delete: () => void
   update: (fields: PropertiesUpdate) => void
   toPrimitives: () => Primitives
}
