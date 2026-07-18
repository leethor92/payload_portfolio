import config from '@payload-config'
import { getPayload } from 'payload'

export async function getSkills() {
  const payload = await getPayload({
    config,
  })

  const result = await payload.find({
    collection: 'skills',
    sort: 'order',
    limit: 100,
  })

  return result.docs
}