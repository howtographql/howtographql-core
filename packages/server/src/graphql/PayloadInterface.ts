import { interfaceType } from 'yoga'

export const PayloadInterface = interfaceType({
  name: 'PayloadInterface',
  description: 'The standard interface for all mutation responses',
  definition: t => {
    t.string('code', {
      nullable: true,
    })
    t.boolean('success')
    t.string('message', {
      nullable: true,
    })
    t.resolveType(() => null)
  },
})
