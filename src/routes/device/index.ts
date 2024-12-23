import { FastifyPluginAsync } from 'fastify'
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Device, DeviceType } from '@models/device'

const deviceRoutePlugin: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const ft = fastify.withTypeProvider<TypeBoxTypeProvider>()

  ft.get('/all', {
    schema: {
      response: {
        200: Type.Array(Device)
      }
    }
  }, async (request, reply): Promise<DeviceType[]> => {
    const device = fastify.createDevice('123', 'Device 1')
    return [device]
  })

  ft.get('/', {
    schema: {
      response: {
        200: Device
      }
    }
  }, async (request, reply): Promise<DeviceType> => {
    return fastify.createDevice('123', 'Device 1')
  })
}

export default deviceRoutePlugin
