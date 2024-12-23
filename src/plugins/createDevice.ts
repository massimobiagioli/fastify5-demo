import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'
import { DeviceType } from '@models/device'

const createDevicePlugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('createDevice', (cod: string, name: string): DeviceType => ({ cod, name }))
}

declare module 'fastify' {
  interface FastifyInstance {
    createDevice: (cod: string, name: string) => DeviceType
  }
}

export default fp(createDevicePlugin)
