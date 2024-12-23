import { Static, Type } from '@fastify/type-provider-typebox'

export const Device = Type.Object({
  cod: Type.String(),
  name: Type.String()
})
export type DeviceType = Static<typeof Device>
