import { getPayload } from 'payload'
import config from '@/payload.config'

// getPayload() already memoizes the instance internally (module-scope cache),
// so no extra caching wrapper is needed here. We intentionally avoid React's
// `cache()` helper since it requires React 19 and this project stays on
// stable React 18.
export const getPayloadClient = async () => {
  return getPayload({ config })
}

export const getSiteSettings = async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings' })
}

export const getHomePage = async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'home-page' })
}

export const getAboutPage = async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'about-page' })
}

export const getCareersPage = async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'careers-page' })
}

export const getTeamMembers = async (category) => {
  const payload = await getPayloadClient()
  const where = category ? { category: { equals: category } } : {}
  const result = await payload.find({
    collection: 'team-members',
    where,
    sort: 'order',
    limit: 100,
  })
  return result.docs
}

export const getFeaturedTeamMembers = async () => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'team-members',
    where: { featuredOnHome: { equals: true } },
    sort: 'order',
    limit: 100,
  })
  return result.docs
}

export const getPrograms = async () => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'programs',
    sort: 'order',
    limit: 100,
  })
  return result.docs
}

export const getProgramById = async (id) => {
  const payload = await getPayloadClient()
  try {
    return await payload.findByID({ collection: 'programs', id })
  } catch {
    return null
  }
}

export const getInterventions = async () => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'interventions',
    sort: 'order',
    limit: 100,
  })
  return result.docs
}

export const getTestimonials = async () => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'testimonials',
    sort: 'order',
    limit: 100,
  })
  return result.docs
}

export const getPosts = async () => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    sort: '-publishedDate',
    limit: 100,
  })
  return result.docs
}

export const getPostById = async (id) => {
  const payload = await getPayloadClient()
  try {
    return await payload.findByID({ collection: 'posts', id })
  } catch {
    return null
  }
}

export const getReports = async () => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'reports',
    sort: '-publishedDate',
    limit: 100,
  })
  return result.docs
}

export const getReportById = async (id) => {
  const payload = await getPayloadClient()
  try {
    return await payload.findByID({ collection: 'reports', id })
  } catch {
    return null
  }
}

export const getFaqs = async (page) => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'faqs',
    where: { page: { equals: page } },
    sort: 'order',
    limit: 100,
  })
  return result.docs
}
