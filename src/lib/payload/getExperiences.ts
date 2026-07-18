import config from '@payload-config'
import { getPayload } from 'payload'

export async function getExperiences() {
  const payload = await getPayload({
    config,
  })

  const result = await payload.find({
    collection: 'experiences',
    sort: 'order',
    depth: 1,
    limit: 100,
  })

  return result.docs
}